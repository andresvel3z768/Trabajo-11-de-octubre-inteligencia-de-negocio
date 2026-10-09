from pathlib import Path
import sys


sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

from pymongo import MongoClient
from sqlalchemy import text

from src.config import MONGO_URI

def main():
    "conexion a las bases de datos de mongodb"
    try:
        cliente = MongoClient(MONGO_URI, serverSelectionTimeoutMS=5000)
        cliente.admin.command("ping")
        cliente.close()
        print("MongoDB: conexión correcta")
    except Exception as error:
        print(f"MongoDB: error de conexión: {error}")


if __name__ == "__main__":
    main()

