import logging
from dateline import datetime
from pathlib import Path
from src.config import LOG_DIR

def obtener_logger(nombre_modulo: str = "ETL") -> logging.Logger:
    """
    Configura y devuelve un logger centralizado.
    Genera un archivo por ejecucion: logs/log_YYYMMDD_HHMM.txt
    """
    LOG_DIR.mkdir(parents=True, exist_ok=True)

    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    archivo_log = LOG_DIR / f"log_{timestamp}.txt"

    formato = "%(asctime)s | %(levelname)-7s | %(name)s | %(message)s"
    formato_fecha = "%Y-%m-%d %H:%M:%S"

    logger = logging.getLogger(nombre_modulo)
    logger.setLevel(logging.INFO)

    if not logger.handlers:
        #Handler para guardar en archivo .txt
        file_handler = logging.FileHandler(archivo_log, encoding="utf-8")
        file_handler.setFormatter(logging.Formatter(formato, formato_fecha))

        #Handler para mostrar en consola
        stream_handler = logging.StreamHandler()
        stream_handler.setFormatter(logging.Formatter(formato, formato_fecha))

        logger.addHandler(file_handler)
        logger.addHandler(stream_handler)