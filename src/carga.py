import logging
import sqlite3
from pathlib import Path

import pandas as pd

from src.config import OUTPUT_DIR, SQLITE_PATH


logger = logging.getLogger(__name__)


def cargar_resultados(
    sabana: pd.DataFrame,
    sqlite_path: Path = SQLITE_PATH,
    output_dir: Path = OUTPUT_DIR,
) -> None:
    sqlite_path.parent.mkdir(parents=True, exist_ok=True)
    output_dir.mkdir(parents=True, exist_ok=True)
    with sqlite3.connect(sqlite_path) as conexion:
        sabana.to_sql("sabana_logistica", conexion, if_exists="replace", index=False)
        indicadores = pd.read_sql_query(
            """
            SELECT ciudad_destino,
                   COUNT(*) AS total_envios,
                   ROUND(AVG(CASE WHEN entrega_oportuna = 1 THEN 100.0 ELSE 0 END), 2) AS porcentaje_oportunidad,
                   ROUND(AVG(costo_total), 2) AS costo_promedio
            FROM sabana_logistica
            GROUP BY ciudad_destino
            """,
            conexion,
        )
        indicadores.to_sql("indicadores_ciudad", conexion, if_exists="replace", index=False)
    sabana.to_csv(output_dir / "sabana_logistica.csv", index=False, encoding="utf-8-sig")
    indicadores.to_csv(output_dir / "indicadores_ciudad.csv", index=False, encoding="utf-8-sig")
    logger.info("Resultados almacenados en SQLite y CSV")

