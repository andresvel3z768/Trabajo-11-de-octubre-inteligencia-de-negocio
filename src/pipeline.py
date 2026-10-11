from src.logger import obtener_logger

from src.calidad import crear_reporte_calidad
from src.carga import cargar_resultados
from src.config import LOG_DIR, OUTPUT_DIR
from src.extraccion import extraer_todo
from src.transformacion import construir_sabana

logging = obtener_logger(__name__)

def configurar_logging() -> None:
    LOG_DIR.mkdir(parents=True, exist_ok=True)
    logging.basicConfig(
        level=logging.INFO,
        format="%(asctime)s | %(levelname)s | %(name)s | %(message)s",
        handlers=[
            logging.FileHandler(LOG_DIR / "etl.log", encoding="utf-8"),
            logging.StreamHandler(),
        ],
        force=True,
    )


def ejecutar_pipeline():
    configurar_logging()
    logger = obtener_logger("Pipeline")
    logger.info("Inicio de la ETL")
    try:
        fuentes = extraer_todo()
        reporte = crear_reporte_calidad(fuentes)
        OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
        reporte.to_csv(OUTPUT_DIR / "reporte_calidad_inicial.csv", index=False)
        sabana = construir_sabana(fuentes)
        cargar_resultados(sabana)
        logger.info("ETL finalizada correctamente")
        return sabana
    except Exception:
        logger.exception("La ETL terminó con un error")
        raise


if __name__ == "__main__":
    ejecutar_pipeline()

