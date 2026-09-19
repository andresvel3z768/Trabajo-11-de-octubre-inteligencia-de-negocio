from pathlib import Path
import os

from dotenv import load_dotenv


BASE_DIR = Path(__file__).resolve().parents[1]
load_dotenv(BASE_DIR / ".env")

MYSQL_CONFIG = {
    "host": os.getenv("MYSQL_HOST", "localhost"),
    "port": int(os.getenv("MYSQL_PORT", "3306")),
    "database": os.getenv("MYSQL_DATABASE", "logistica"),
    "user": os.getenv("MYSQL_USER", "etl_user"),
    "password": os.getenv("MYSQL_PASSWORD", "etl_password"),
}

MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017")
MONGO_DATABASE = os.getenv("MONGO_DATABASE", "logistica")
CSV_DIR = BASE_DIR / "datos" / "csv"
OUTPUT_DIR = BASE_DIR / "datos" / "salida"
INTERMEDIATE_DIR = BASE_DIR / "datos" / "intermedios"
SQLITE_PATH = BASE_DIR / os.getenv("SQLITE_PATH", "sqlite/logistica_analitica.db")
LOG_DIR = BASE_DIR / "logs"

