import logging
from pathlib import Path

import pandas as pd
from pymongo import MongoClient
from sqlalchemy import create_engine

from src.config import CSV_DIR, MONGO_DATABASE, MONGO_URI, MYSQL_CONFIG


logger = logging.getLogger(__name__)


def crear_motor_mysql():
    """Crea la conexión reutilizable con MySQL."""
    url = (
        f"mysql+pymysql://{MYSQL_CONFIG['user']}:{MYSQL_CONFIG['password']}"
        f"@{MYSQL_CONFIG['host']}:{MYSQL_CONFIG['port']}/{MYSQL_CONFIG['database']}"
    )
    return create_engine(url)


def extraer_mysql() -> dict[str, pd.DataFrame]:
    """Extrae las tablas relacionales necesarias para la ETL."""
    logger.info("Iniciando extracción desde MySQL")
    motor = crear_motor_mysql()
    tablas = {}
    for tabla in ["envios", "clientes", "vehiculos", "conductores"]:
        tablas[tabla] = pd.read_sql(f"SELECT * FROM {tabla}", motor)
        logger.info("Tabla %s: %s filas", tabla, len(tablas[tabla]))
    motor.dispose()
    return tablas


def extraer_mongodb() -> pd.DataFrame:
    """Extrae los eventos de trazabilidad almacenados en MongoDB."""
    logger.info("Iniciando extracción desde MongoDB")
    cliente = MongoClient(MONGO_URI, serverSelectionTimeoutMS=5000)
    documentos = list(cliente[MONGO_DATABASE]["eventos"].find({}, {"_id": 0}))
    cliente.close()
    eventos = pd.DataFrame(documentos)
    logger.info("MongoDB: %s eventos", len(eventos))
    return eventos


def extraer_csv(directorio: Path = CSV_DIR) -> dict[str, pd.DataFrame]:
    """Lee las tres fuentes planas del caso."""
    logger.info("Iniciando extracción de archivos CSV")
    return {
        "tarifas": pd.read_csv(directorio / "tarifas.csv"),
        "metas": pd.read_csv(directorio / "metas_mensuales.csv"),
        "satisfaccion": pd.read_csv(directorio / "satisfaccion_clientes.csv"),
    }


def extraer_todo() -> dict[str, pd.DataFrame]:
    fuentes = extraer_mysql()
    fuentes["eventos"] = extraer_mongodb()
    fuentes.update(extraer_csv())
    return fuentes

