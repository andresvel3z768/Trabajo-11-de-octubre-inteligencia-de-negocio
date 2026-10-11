"""
Módulo de transformación de la ETL de Airbnb (Bogotá).

Recibe los DataFrames crudos extraídos de MongoDB (``listing``, ``calendar`` y
``reviews``) y los deja limpios, tipados y listos para cargarse en una base de
datos analítica (SQLite).

Uso típico::

    from src.extraccion import MongoDBExtractor
    from src.transformacion import Transformacion

    fuentes = MongoDBExtractor().extract_all_collections()
    resultado = Transformacion(fuentes).ejecutar()
    resultado["listings"].head()

Cada paso de la clase registra en el log qué se hizo, cuántos registros había
antes y después, y las advertencias encontradas.
"""

import ast
import json
import logging
import re

import numpy as np
import pandas as pd


logger = logging.getLogger(__name__)

# Rangos de precio por noche en pesos colombianos (COP). Los límites se
# eligieron a partir de la distribución observada en el EDA (mediana cercana a
# 200.000 COP por noche).
RANGOS_PRECIO = [0, 100_000, 250_000, 500_000, 1_000_000, np.inf]
ETIQUETAS_PRECIO = ["Económico", "Medio", "Alto", "Premium", "Lujo"]

# Precios por noche fuera de este intervalo se consideran errores de captura
# (el EDA mostró máximos de hasta 8.400 millones de COP).
PRECIO_MINIMO = 10_000
PRECIO_MAXIMO = 20_000_000

# Cantidad de amenidades más frecuentes que se convierten en columnas booleanas.
TOP_AMENIDADES = 20

VALORES_VERDADEROS = {"t", "true", "1", "yes", "y", "si", "sí"}
VALORES_FALSOS = {"f", "false", "0", "no", "n"}


class Transformacion:
    """
    Limpia y transforma las colecciones de Airbnb para su carga analítica.

    Tareas implementadas:

    * limpieza de valores nulos y duplicados,
    * normalización de precios (quita ``$`` y ``,`` y convierte a número),
    * conversión de fechas al formato estándar ``YYYY-MM-DD``,
    * derivación de año, mes, día, trimestre y día de la semana desde ``date``,
    * categorización de precios por rangos,
    * expansión de campos anidados (``amenities`` y ``price_quote_raw``),
    * generación de DataFrames limpios listos para la carga.

    Parameters
    ----------
    fuentes : dict[str, pd.DataFrame]
        Diccionario con los DataFrames crudos. Se aceptan las claves
        ``listing`` o ``listings``, ``calendar`` y ``reviews``.
    """

    def __init__(self, fuentes: dict[str, pd.DataFrame]):
        self.fuentes = fuentes
        # Resumen de cada paso (nombre, filas antes, filas después) para auditoría.
        self.bitacora: list[dict] = []

    # ------------------------------------------------------------------
    # Utilidades generales
    # ------------------------------------------------------------------
    def _registrar(self, paso: str, antes: int, despues: int) -> None:
        """Guarda y escribe en el log el conteo de registros de un paso."""
        self.bitacora.append({"paso": paso, "filas_antes": antes, "filas_despues": despues})
        logger.info("%s | registros antes: %s | después: %s | eliminados: %s",
                    paso, antes, despues, antes - despues)

    def _obtener_fuente(self, *nombres: str) -> pd.DataFrame | None:
        """Devuelve una copia de la primera fuente encontrada entre ``nombres``."""
        for nombre in nombres:
            if nombre in self.fuentes:
                return self.fuentes[nombre].copy()
        logger.warning("No se encontró ninguna de las fuentes %s", nombres)
        return None

    @staticmethod
    def _parsear_anidado(valor):
        """
        Convierte un valor anidado a objeto Python.

        En MongoDB los campos llegan como ``list``/``dict``; en el CSV llegan
        como texto JSON. Si el texto no es JSON válido se intenta con
        ``ast.literal_eval``. Devuelve ``None`` si no se puede interpretar.
        """
        if isinstance(valor, (list, dict)):
            return valor
        if valor is None or (isinstance(valor, float) and np.isnan(valor)):
            return None
        texto = str(valor).strip()
        if not texto:
            return None
        try:
            return json.loads(texto)
        except (ValueError, TypeError):
            try:
                return ast.literal_eval(texto)
            except (ValueError, SyntaxError):
                return None

    @staticmethod
    def normalizar_booleano(serie: pd.Series) -> pd.Series:
        """Convierte valores ``t``/``f``, ``true``/``false``, 1/0 a booleano (nullable)."""
        if pd.api.types.is_bool_dtype(serie):
            return serie.astype("boolean")
        texto = serie.astype("string").str.strip().str.lower()
        resultado = pd.Series(pd.NA, index=serie.index, dtype="boolean")
        resultado[texto.isin(VALORES_VERDADEROS)] = True
        resultado[texto.isin(VALORES_FALSOS)] = False
        return resultado

    # ------------------------------------------------------------------
    # 1. Nulos y duplicados
    # ------------------------------------------------------------------
    def limpiar_nulos_y_duplicados(
        self,
        df: pd.DataFrame,
        nombre: str,
        clave: list[str],
        obligatorias: list[str] | None = None,
    ) -> pd.DataFrame:
        """
        Elimina columnas vacías, filas sin campos obligatorios y duplicados.

        Reglas:

        1. Se eliminan las columnas 100 % nulas (no aportan información).
        2. Se eliminan las filas con nulos en las columnas ``obligatorias``
           (por ejemplo, la llave primaria o la fecha).
        3. Se eliminan duplicados por ``clave`` conservando el último registro.

        Las columnas con estructuras anidadas se convierten temporalmente a
        texto para poder detectar duplicados (``list`` no es hasheable).
        """
        antes = len(df)

        columnas_vacias = df.columns[df.isna().all()].tolist()
        if columnas_vacias:
            logger.warning("%s: se eliminan %s columnas 100%% nulas: %s",
                           nombre, len(columnas_vacias), columnas_vacias)
            df = df.drop(columns=columnas_vacias)

        obligatorias = [col for col in (obligatorias or clave) if col in df.columns]
        nulos_obligatorios = int(df[obligatorias].isna().any(axis=1).sum())
        if nulos_obligatorios:
            logger.warning("%s: %s filas sin valores obligatorios %s",
                           nombre, nulos_obligatorios, obligatorias)
        df = df.dropna(subset=obligatorias)

        clave = [col for col in clave if col in df.columns]
        if clave:
            duplicados = int(df.duplicated(subset=clave, keep="last").sum())
        else:
            # Sin clave conocida: duplicados exactos, aplanando estructuras anidadas.
            comparable = df.apply(
                lambda col: col.astype(str) if col.map(lambda v: isinstance(v, (list, dict))).any() else col
            )
            duplicados = int(comparable.duplicated(keep="last").sum())
            df = df.loc[~comparable.duplicated(keep="last")]
        if duplicados:
            logger.warning("%s: %s registros duplicados eliminados", nombre, duplicados)
        if clave:
            df = df.drop_duplicates(subset=clave, keep="last")

        self._registrar(f"{nombre} - nulos y duplicados", antes, len(df))
        return df.reset_index(drop=True)

    # ------------------------------------------------------------------
    # 2. Precios
    # ------------------------------------------------------------------
    @staticmethod
    def normalizar_precio(serie: pd.Series) -> pd.Series:
        """
        Convierte precios con formato de texto a ``float``.

        Ejemplo: ``'$284,294.01'`` -> ``284294.01``. Se eliminan los símbolos
        ``$``, las comas de miles y cualquier carácter no numérico. Los valores
        que no se pueden convertir quedan como ``NaN``.
        """
        if pd.api.types.is_numeric_dtype(serie):
            return serie.astype(float)
        limpio = (
            serie.astype("string")
            .str.replace(r"[$,\s]", "", regex=True)
            .str.replace(r"[^0-9.\-]", "", regex=True)
        )
        numerico = pd.to_numeric(limpio, errors="coerce")
        no_convertidos = int((numerico.isna() & serie.notna()).sum())
        if no_convertidos:
            logger.warning("%s precios no se pudieron convertir a número", no_convertidos)
        return numerico

    def filtrar_precios_atipicos(
        self,
        df: pd.DataFrame,
        columna: str,
        minimo: float = PRECIO_MINIMO,
        maximo: float = PRECIO_MAXIMO,
    ) -> pd.DataFrame:
        """
        Elimina registros con precio fuera de ``[minimo, maximo]``.

        Los precios nulos se conservan (el alojamiento existe aunque no tenga
        cotización); solo se descartan los valores claramente erróneos.
        """
        antes = len(df)
        fuera_de_rango = df[columna].notna() & ~df[columna].between(minimo, maximo)
        if fuera_de_rango.any():
            logger.warning("Se eliminan %s registros con '%s' fuera de [%s, %s] (máximo observado: %s)",
                           int(fuera_de_rango.sum()), columna, minimo, maximo, df[columna].max())
        df = df.loc[~fuera_de_rango].reset_index(drop=True)
        self._registrar(f"filtro de precios atípicos ({columna})", antes, len(df))
        return df

    @staticmethod
    def categorizar_precio(
        serie: pd.Series,
        rangos: list[float] = RANGOS_PRECIO,
        etiquetas: list[str] = ETIQUETAS_PRECIO,
    ) -> pd.Series:
        """
        Asigna a cada precio un rango (Económico, Medio, Alto, Premium, Lujo).

        Los límites son por noche y en COP; los precios nulos quedan como
        ``'Sin precio'``.
        """
        categoria = pd.cut(serie, bins=rangos, labels=etiquetas, right=False)
        return categoria.cat.add_categories("Sin precio").fillna("Sin precio")

    # ------------------------------------------------------------------
    # 3. Fechas
    # ------------------------------------------------------------------
    @staticmethod
    def convertir_fechas(df: pd.DataFrame, columnas: list[str]) -> pd.DataFrame:
        """
        Convierte las columnas indicadas al formato estándar ``YYYY-MM-DD``.

        Se parsean a ``datetime`` (los valores inválidos quedan nulos y se
        reportan en el log) y luego se formatean como texto ISO, que es el
        formato que SQLite interpreta como fecha.
        """
        for columna in columnas:
            if columna not in df.columns:
                logger.warning("Columna de fecha '%s' no encontrada; se omite", columna)
                continue
            fechas = pd.to_datetime(df[columna], errors="coerce")
            invalidas = int((fechas.isna() & df[columna].notna()).sum())
            if invalidas:
                logger.warning("'%s': %s fechas inválidas convertidas a nulo", columna, invalidas)
            df[columna] = fechas.dt.strftime("%Y-%m-%d")
        logger.info("Fechas estandarizadas a YYYY-MM-DD: %s", columnas)
        return df

    @staticmethod
    def derivar_variables_fecha(df: pd.DataFrame, columna: str = "date") -> pd.DataFrame:
        """
        Deriva variables de calendario a partir de ``columna``.

        Columnas generadas: ``anio``, ``mes``, ``dia``, ``trimestre``,
        ``dia_semana`` (0 = lunes) y ``es_fin_de_semana``.
        """
        fechas = pd.to_datetime(df[columna], format="%Y-%m-%d", errors="coerce")
        df["anio"] = fechas.dt.year.astype("Int16")
        df["mes"] = fechas.dt.month.astype("Int8")
        df["dia"] = fechas.dt.day.astype("Int8")
        df["trimestre"] = fechas.dt.quarter.astype("Int8")
        df["dia_semana"] = fechas.dt.dayofweek.astype("Int8")
        df["es_fin_de_semana"] = df["dia_semana"] >= 5
        logger.info("Variables derivadas de '%s': anio, mes, dia, trimestre, dia_semana, es_fin_de_semana",
                    columna)
        return df

    # ------------------------------------------------------------------
    # 4. Campos anidados
    # ------------------------------------------------------------------
    def expandir_amenities(
        self, listings: pd.DataFrame, top_n: int = TOP_AMENIDADES
    ) -> tuple[pd.DataFrame, pd.DataFrame]:
        """
        Expande la lista ``amenities`` de cada alojamiento.

        Devuelve:

        * ``listings`` con ``cantidad_amenidades`` y una columna booleana
          ``amenidad_<nombre>`` por cada una de las ``top_n`` más frecuentes.
        * ``listing_amenities``: tabla puente (``listing_id``, ``amenidad``)
          con una fila por amenidad, útil para consultas analíticas.
        """
        listas = listings["amenities"].map(self._parsear_anidado)
        no_parseadas = int((listas.isna() & listings["amenities"].notna()).sum())
        if no_parseadas:
            logger.warning("amenities: %s registros no se pudieron interpretar", no_parseadas)
        listas = listas.map(lambda v: [str(a).strip() for a in v] if isinstance(v, list) else [])

        puente = (
            pd.DataFrame({"listing_id": listings["id"], "amenidad": listas})
            .explode("amenidad")
            .dropna(subset=["amenidad"])
            .drop_duplicates()
            .reset_index(drop=True)
        )

        listings["cantidad_amenidades"] = listas.map(len)
        principales = puente["amenidad"].value_counts().head(top_n).index
        conjuntos = listas.map(set)
        for amenidad in principales:
            nombre_columna = "amenidad_" + re.sub(r"\W+", "_", amenidad.lower()).strip("_")
            listings[nombre_columna] = conjuntos.map(lambda s, a=amenidad: a in s)

        logger.info("amenities expandido: %s filas en tabla puente, %s amenidades distintas, "
                    "%s columnas booleanas creadas", len(puente), puente["amenidad"].nunique(), len(principales))
        return listings.drop(columns=["amenities"]), puente

    def expandir_price_quote(self, listings: pd.DataFrame) -> pd.DataFrame:
        """
        Aplana el diccionario ``price_quote_raw`` en columnas planas.

        Extrae de ``quote``: moneda, precio total, descuento, tarifa de
        limpieza, tarifa de servicio e impuestos (convertidos a número).
        """
        if "price_quote_raw" not in listings.columns:
            logger.warning("price_quote_raw no existe; no se expande")
            return listings

        cotizaciones = listings["price_quote_raw"].map(self._parsear_anidado)
        cotizaciones = cotizaciones.map(lambda v: v.get("quote", v) if isinstance(v, dict) else {})
        planas = pd.json_normalize(cotizaciones.tolist()).set_index(listings.index)

        campos = {
            "currency": "cotizacion_moneda",
            "discount_amount": "cotizacion_descuento",
            "cleaning_fee": "cotizacion_tarifa_limpieza",
            "service_fee": "cotizacion_tarifa_servicio",
            "taxes": "cotizacion_impuestos",
        }
        for origen, destino in campos.items():
            if origen not in planas.columns:
                listings[destino] = np.nan
                continue
            valores = planas[origen]
            listings[destino] = valores if origen == "currency" else pd.to_numeric(valores, errors="coerce")

        logger.info("price_quote_raw expandido en columnas: %s", list(campos.values()))
        return listings.drop(columns=["price_quote_raw"])

    # ------------------------------------------------------------------
    # 5. Transformación por colección
    # ------------------------------------------------------------------
    def transformar_listings(self, listings: pd.DataFrame) -> tuple[pd.DataFrame, pd.DataFrame]:
        """
        Limpia la colección ``listing`` y genera la tabla de amenidades.

        Manejo de nulos (columnas no obligatorias):

        * texto descriptivo -> ``'Sin información'``,
        * ``bedrooms``, ``beds``, ``bathrooms`` -> mediana,
        * ``reviews_per_month`` -> 0 cuando no hay reseñas,
        * puntajes de reseñas -> se conservan nulos (sin reseñas no hay
          calificación; imputarlos sesgaría el análisis).
        """
        logger.info("Transformando listings (%s filas, %s columnas)", *listings.shape)
        listings = listings.drop(columns=["_id"], errors="ignore")
        listings = self.limpiar_nulos_y_duplicados(listings, "listings", clave=["id"])

        # Precios: texto -> número, filtro de atípicos y categorización.
        listings["price"] = self.normalizar_precio(listings["price"])
        for columna in ("price_quote_total_price", "price_quote_price_per_night"):
            if columna in listings.columns:
                listings[columna] = self.normalizar_precio(listings[columna])
        listings = self.filtrar_precios_atipicos(listings, "price")
        listings["rango_precio"] = self.categorizar_precio(listings["price"])

        # Fechas al formato estándar.
        columnas_fecha = [c for c in ("last_scraped", "host_since", "price_quote_checkin_date",
                                      "price_quote_checkout_date", "calendar_last_scraped",
                                      "first_review", "last_review") if c in listings.columns]
        listings = self.convertir_fechas(listings, columnas_fecha)

        # Booleanos con formato t/f.
        for columna in ("host_is_superhost", "host_has_profile_pic", "host_identity_verified",
                        "has_availability", "instant_bookable"):
            if columna in listings.columns:
                listings[columna] = self.normalizar_booleano(listings[columna])

        # Imputación de nulos no obligatorios.
        for columna in ("name", "description", "neighborhood_overview", "host_location", "host_about",
                        "bathrooms_text"):
            if columna in listings.columns:
                listings[columna] = listings[columna].fillna("Sin información")
        for columna in ("bedrooms", "beds", "bathrooms"):
            if columna in listings.columns:
                nulos = int(listings[columna].isna().sum())
                listings[columna] = listings[columna].fillna(listings[columna].median())
                if nulos:
                    logger.info("'%s': %s nulos imputados con la mediana", columna, nulos)
        if "reviews_per_month" in listings.columns:
            listings["reviews_per_month"] = listings["reviews_per_month"].fillna(0)

        # Campos anidados.
        listings = self.expandir_price_quote(listings)
        listings, amenidades = self.expandir_amenities(listings)

        # Mongo puede devolver campos anidados restantes (p. ej. host_verifications):
        # se serializan a texto para que SQLite pueda almacenarlos.
        for columna in listings.columns:
            if listings[columna].map(lambda v: isinstance(v, (list, dict))).any():
                logger.warning("'%s' contiene estructuras anidadas; se serializa a JSON", columna)
                listings[columna] = listings[columna].map(
                    lambda v: json.dumps(v, ensure_ascii=False, default=str) if isinstance(v, (list, dict)) else v
                )

        listings = listings.rename(columns={"id": "listing_id"})
        logger.info("listings transformado: %s filas, %s columnas", *listings.shape)
        return listings, amenidades

    def transformar_calendar(self, calendar: pd.DataFrame) -> pd.DataFrame:
        """
        Limpia la colección ``calendar`` (disponibilidad diaria por alojamiento).

        Estandariza la fecha, convierte ``available`` a booleano y deriva las
        variables de calendario desde ``date``.
        """
        logger.info("Transformando calendar (%s filas)", len(calendar))
        calendar = calendar.drop(columns=["_id"], errors="ignore")
        calendar = self.convertir_fechas(calendar, ["date"])
        calendar = self.limpiar_nulos_y_duplicados(
            calendar, "calendar", clave=["listing_id", "date"], obligatorias=["listing_id", "date"]
        )
        calendar["available"] = self.normalizar_booleano(calendar["available"])
        for columna in ("minimum_nights", "maximum_nights"):
            if columna in calendar.columns:
                calendar[columna] = pd.to_numeric(calendar[columna], errors="coerce").astype("Int32")
        return self.derivar_variables_fecha(calendar, "date")

    @staticmethod
    def resumir_calendar(calendar: pd.DataFrame) -> pd.DataFrame:
        """
        Agrega el calendario diario por alojamiento y mes.

        Reduce millones de filas diarias a un resumen mensual con días
        disponibles, días ocupados y porcentaje de ocupación.
        """
        resumen = (
            calendar.groupby(["listing_id", "anio", "mes", "trimestre"], observed=True)
            .agg(dias_registrados=("available", "size"),
                 dias_disponibles=("available", "sum"))
            .reset_index()
        )
        resumen["dias_ocupados"] = resumen["dias_registrados"] - resumen["dias_disponibles"]
        resumen["porcentaje_ocupacion"] = (
            resumen["dias_ocupados"] / resumen["dias_registrados"] * 100
        ).round(2)
        logger.info("calendar resumido por mes: %s filas", len(resumen))
        return resumen

    def transformar_reviews(self, reviews: pd.DataFrame) -> pd.DataFrame:
        """
        Limpia la colección ``reviews``.

        Estandariza la fecha, deriva variables de calendario, reemplaza las
        etiquetas ``<br/>`` de los comentarios y completa comentarios vacíos.
        """
        logger.info("Transformando reviews (%s filas)", len(reviews))
        reviews = reviews.drop(columns=["_id"], errors="ignore")
        reviews = self.convertir_fechas(reviews, ["date"])
        reviews = self.limpiar_nulos_y_duplicados(
            reviews, "reviews", clave=["id"], obligatorias=["id", "listing_id", "date"]
        )
        reviews["comments"] = (
            reviews["comments"]
            .fillna("Sin comentario")
            .astype(str)
            .str.replace(r"<br\s*/?>", " ", regex=True)
            .str.replace(r"\s+", " ", regex=True)
            .str.strip()
        )
        reviews["reviewer_name"] = reviews["reviewer_name"].fillna("Anónimo")
        reviews = reviews.rename(columns={"id": "review_id"})
        return self.derivar_variables_fecha(reviews, "date")

    # ------------------------------------------------------------------
    # 6. Orquestación
    # ------------------------------------------------------------------
    def ejecutar(self) -> dict[str, pd.DataFrame]:
        """
        Ejecuta todas las transformaciones y devuelve los DataFrames finales.

        Returns
        -------
        dict[str, pd.DataFrame]
            ``listings``, ``listing_amenities``, ``calendar``,
            ``calendar_mensual`` y ``reviews``, listos para la carga.
        """
        logger.info("Inicio de la transformación")
        resultado: dict[str, pd.DataFrame] = {}
        try:
            listings = self._obtener_fuente("listing", "listings")
            if listings is not None:
                resultado["listings"], resultado["listing_amenities"] = self.transformar_listings(listings)

            calendar = self._obtener_fuente("calendar")
            if calendar is not None:
                resultado["calendar"] = self.transformar_calendar(calendar)
                resultado["calendar_mensual"] = self.resumir_calendar(resultado["calendar"])

            reviews = self._obtener_fuente("reviews")
            if reviews is not None:
                resultado["reviews"] = self.transformar_reviews(reviews)
        except Exception:
            logger.exception("Error durante la transformación")
            raise

        for nombre, df in resultado.items():
            logger.info("Salida '%s': %s filas, %s columnas", nombre, *df.shape)
        logger.info("Transformación finalizada")
        return resultado

    def resumen(self) -> pd.DataFrame:
        """Devuelve la bitácora de registros antes/después de cada paso."""
        return pd.DataFrame(self.bitacora)
