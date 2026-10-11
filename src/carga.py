"""
Módulo de carga de la ETL de Airbnb (Bogotá).

Toma los DataFrames producidos por ``Transformacion`` y los:

* inserta en una base de datos SQLite nueva,
* exporta a uno o varios archivos XLSX,
* verifica que la cantidad de registros cargados coincida con la de origen.

Uso típico::

    from src.transformacion import Transformacion
    from src.carga import Carga

    tablas = Transformacion(fuentes).ejecutar()
    reporte = Carga().ejecutar(tablas)
"""

from src.logger import obtener_logger
import re
import sqlite3
from contextlib import closing
from pathlib import Path

import pandas as pd
from openpyxl import load_workbook

from src.config import OUTPUT_DIR, SQLITE_PATH


logger = obtener_logger("Carga")

# Límite de filas por hoja de Excel (1.048.576) menos la fila de encabezado.
MAX_FILAS_HOJA = 1_048_575
# Límite de caracteres por celda de Excel.
MAX_CARACTERES_CELDA = 32_767
# Caracteres de control que Excel no admite (openpyxl lanza IllegalCharacterError).
CARACTERES_ILEGALES = re.compile(r"[\x00-\x08\x0b\x0c\x0e-\x1f]")
# Tablas que no se exportan a XLSX por defecto: calendar tiene millones de filas
# diarias y exportarlo tarda decenas de minutos; calendar_mensual lo resume.
TABLAS_EXCLUIDAS_XLSX = {"calendar"}
# Filas por lote al insertar en SQLite, para no saturar la memoria con calendar.
TAMANO_LOTE = 50_000


class Carga:
    """
    Carga los DataFrames transformados en SQLite y XLSX y verifica el resultado.

    Parameters
    ----------
    sqlite_path : Path
        Ruta del archivo SQLite de destino.
    output_dir : Path
        Carpeta donde se escriben los archivos XLSX.
    """

    def __init__(self, sqlite_path: Path = SQLITE_PATH, output_dir: Path = OUTPUT_DIR):
        self.sqlite_path = Path(sqlite_path)
        self.output_dir = Path(output_dir)
        # Archivos XLSX generados por tabla, para la verificación posterior.
        self.archivos_xlsx: dict[str, Path] = {}

    # ------------------------------------------------------------------
    # 1. SQLite
    # ------------------------------------------------------------------
    def cargar_sqlite(self, tablas: dict[str, pd.DataFrame], reiniciar: bool = True) -> None:
        """
        Inserta cada DataFrame como una tabla en la base SQLite.

        Si ``reiniciar`` es ``True`` se borra el archivo existente para crear
        una base nueva; si es ``False`` las tablas con el mismo nombre se
        reemplazan y las demás se conservan. La inserción se hace en lotes de
        ``TAMANO_LOTE`` filas dentro de una única transacción por tabla.
        """
        self.sqlite_path.parent.mkdir(parents=True, exist_ok=True)
        if reiniciar and self.sqlite_path.exists():
            self.sqlite_path.unlink()
            logger.info("Base SQLite anterior eliminada: %s", self.sqlite_path)

        logger.info("Inicio de carga en SQLite: %s", self.sqlite_path)
        # closing() cierra la conexión al salir; el bloque interno confirma la transacción.
        with closing(sqlite3.connect(self.sqlite_path)) as conexion, conexion:
            for nombre, df in tablas.items():
                try:
                    df.to_sql(nombre, conexion, if_exists="replace", index=False,
                              chunksize=TAMANO_LOTE)
                    logger.info("Tabla '%s' cargada: %s filas, %s columnas", nombre, *df.shape)
                except Exception:
                    logger.exception("Error al cargar la tabla '%s' en SQLite", nombre)
                    raise
            self._crear_indices(conexion, tablas)
        logger.info("Carga en SQLite finalizada")

    @staticmethod
    def _crear_indices(conexion: sqlite3.Connection, tablas: dict[str, pd.DataFrame]) -> None:
        """Crea índices sobre ``listing_id`` para acelerar los cruces entre tablas."""
        for nombre, df in tablas.items():
            if "listing_id" in df.columns:
                conexion.execute(
                    f'CREATE INDEX IF NOT EXISTS "idx_{nombre}_listing_id" ON "{nombre}" (listing_id)'
                )
                logger.info("Índice creado en '%s'(listing_id)", nombre)

    # ------------------------------------------------------------------
    # 2. XLSX
    # ------------------------------------------------------------------
    @staticmethod
    def _preparar_para_excel(df: pd.DataFrame, nombre: str) -> pd.DataFrame:
        """
        Ajusta el texto a las restricciones de Excel.

        Elimina caracteres de control no permitidos y recorta las celdas que
        superan ``MAX_CARACTERES_CELDA``. Solo afecta a la copia exportada.
        """
        df = df.copy()
        for columna in df.select_dtypes(include=["object", "string"]).columns:
            texto = df[columna].astype("string")
            texto = texto.str.replace(CARACTERES_ILEGALES, "", regex=True)
            largos = texto.str.len() > MAX_CARACTERES_CELDA
            if largos.any():
                logger.warning("%s.%s: %s celdas recortadas a %s caracteres",
                               nombre, columna, int(largos.sum()), MAX_CARACTERES_CELDA)
                texto = texto.str.slice(0, MAX_CARACTERES_CELDA)
            df[columna] = texto
        return df

    def exportar_xlsx(
        self,
        tablas: dict[str, pd.DataFrame],
        nombres: list[str] | None = None,
        max_filas_hoja: int = MAX_FILAS_HOJA,
    ) -> dict[str, Path]:
        """
        Exporta cada tabla a su propio archivo ``<nombre>.xlsx``.

        Las tablas que superan ``max_filas_hoja`` se reparten en varias hojas
        (``<nombre>_1``, ``<nombre>_2``, ...) dentro del mismo archivo, porque
        Excel admite como máximo 1.048.576 filas por hoja.

        Parameters
        ----------
        nombres : list[str], optional
            Subconjunto de tablas a exportar. Por defecto se exportan todas.
            Exportar ``calendar`` completo (millones de filas) tarda varios
            minutos; ``calendar_mensual`` es la alternativa liviana.
        """
        self.output_dir.mkdir(parents=True, exist_ok=True)
        seleccion = nombres or list(tablas)

        for nombre in seleccion:
            if nombre not in tablas:
                logger.warning("Tabla '%s' no existe; no se exporta a XLSX", nombre)
                continue
            df = self._preparar_para_excel(tablas[nombre], nombre)
            ruta = self.output_dir / f"{nombre}.xlsx"
            partes = max(1, -(-len(df) // max_filas_hoja))
            if partes > 1:
                logger.warning("'%s' tiene %s filas; se divide en %s hojas", nombre, len(df), partes)
            try:
                with pd.ExcelWriter(ruta, engine="openpyxl") as escritor:
                    for parte in range(partes):
                        hoja = nombre if partes == 1 else f"{nombre}_{parte + 1}"
                        bloque = df.iloc[parte * max_filas_hoja:(parte + 1) * max_filas_hoja]
                        # Excel limita los nombres de hoja a 31 caracteres.
                        bloque.to_excel(escritor, sheet_name=hoja[:31], index=False)
            except Exception:
                logger.exception("Error al exportar '%s' a XLSX", nombre)
                raise
            self.archivos_xlsx[nombre] = ruta
            logger.info("Tabla '%s' exportada a %s (%s filas)", nombre, ruta, len(df))
        return self.archivos_xlsx

    # ------------------------------------------------------------------
    # 3. Verificación
    # ------------------------------------------------------------------
    def verificar_carga(self, tablas: dict[str, pd.DataFrame]) -> pd.DataFrame:
        """
        Compara los registros de origen con los cargados en SQLite y XLSX.

        Para SQLite cuenta filas con ``SELECT COUNT(*)`` y compara columnas.
        Para cada XLSX generado suma las filas de todas sus hojas (sin el
        encabezado). Las diferencias se registran como error en el log.

        Returns
        -------
        pd.DataFrame
            Una fila por tabla con los conteos y la columna ``estado``
            (``OK`` o ``ERROR``).
        """
        filas = []
        with closing(sqlite3.connect(self.sqlite_path)) as conexion:
            existentes = {fila[0] for fila in conexion.execute(
                "SELECT name FROM sqlite_master WHERE type = 'table'")}
            for nombre, df in tablas.items():
                registro = {"tabla": nombre, "filas_origen": len(df), "columnas_origen": df.shape[1],
                            "filas_sqlite": None, "columnas_sqlite": None, "filas_xlsx": None}
                if nombre in existentes:
                    registro["filas_sqlite"] = conexion.execute(
                        f'SELECT COUNT(*) FROM "{nombre}"').fetchone()[0]
                    registro["columnas_sqlite"] = len(conexion.execute(
                        f'PRAGMA table_info("{nombre}")').fetchall())
                if nombre in self.archivos_xlsx:
                    registro["filas_xlsx"] = self._contar_filas_xlsx(self.archivos_xlsx[nombre])
                filas.append(registro)

        reporte = pd.DataFrame(filas)
        # Enteros nullable: una tabla ausente en SQLite o XLSX queda como <NA>.
        for columna in ("filas_sqlite", "columnas_sqlite", "filas_xlsx"):
            reporte[columna] = reporte[columna].astype("Int64")
        coincide_sqlite = ((reporte["filas_sqlite"] == reporte["filas_origen"]) & (
            reporte["columnas_sqlite"] == reporte["columnas_origen"])).fillna(False)
        coincide_xlsx = (reporte["filas_xlsx"].isna()
                         | (reporte["filas_xlsx"] == reporte["filas_origen"])).fillna(False)
        reporte["estado"] = (coincide_sqlite & coincide_xlsx).map({True: "OK", False: "ERROR"})

        for registro in reporte.to_dict("records"):
            if registro["estado"] == "OK":
                logger.info("Verificación OK '%s': %s filas", registro["tabla"], registro["filas_origen"])
            else:
                logger.error("Verificación fallida '%s': origen=%s, sqlite=%s, xlsx=%s",
                             registro["tabla"], registro["filas_origen"],
                             registro["filas_sqlite"], registro["filas_xlsx"])
        return reporte

    @staticmethod
    def _contar_filas_xlsx(ruta: Path) -> int:
        """Suma las filas de datos de todas las hojas de un XLSX (sin encabezados)."""
        libro = load_workbook(ruta, read_only=True)
        try:
            return sum(max(hoja.max_row - 1, 0) for hoja in libro.worksheets)
        finally:
            libro.close()

    # ------------------------------------------------------------------
    # 4. Orquestación
    # ------------------------------------------------------------------
    def ejecutar(
        self,
        tablas: dict[str, pd.DataFrame],
        exportar: list[str] | None = None,
    ) -> pd.DataFrame:
        """
        Carga en SQLite, exporta a XLSX y verifica.

        Parameters
        ----------
        tablas : dict[str, pd.DataFrame]
            Salida de ``Transformacion.ejecutar()``.
        exportar : list[str], optional
            Tablas a exportar a XLSX; por defecto, todas excepto las de
            ``TABLAS_EXCLUIDAS_XLSX``.

        Returns
        -------
        pd.DataFrame
            Reporte de verificación de ``verificar_carga``.
        """
        logger.info("Inicio de la carga de %s tablas", len(tablas))
        self.cargar_sqlite(tablas)
        if exportar is None:
            exportar = [nombre for nombre in tablas if nombre not in TABLAS_EXCLUIDAS_XLSX]
            omitidas = sorted(set(tablas) - set(exportar))
            if omitidas:
                logger.info("Tablas omitidas en XLSX por volumen: %s", omitidas)
        self.exportar_xlsx(tablas, nombres=exportar)
        reporte = self.verificar_carga(tablas)
        errores = int((reporte["estado"] == "ERROR").sum())
        if errores:
            logger.error("Carga finalizada con %s tablas inconsistentes", errores)
        else:
            logger.info("Carga finalizada y verificada correctamente")
        return reporte
