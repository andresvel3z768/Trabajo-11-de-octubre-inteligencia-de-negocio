from pathlib import Path
import sys


sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

from pymongo import MongoClient
from sqlalchemy import text

from src.config import MONGO_URI
from src.extraccion import crear_motor_mysql


def main():
    try:
        motor = crear_motor_mysql()
        with motor.connect() as conexion:
            conexion.execute(text("SELECT 1"))
        motor.dispose()
        print("MySQL: conexión correcta")
    except Exception as error:
        print(f"MySQL: error de conexión: {error}")

    try:
        cliente = MongoClient(MONGO_URI, serverSelectionTimeoutMS=5000)
        cliente.admin.command("ping")
        cliente.close()
        print("MongoDB: conexión correcta")
    except Exception as error:
        print(f"MongoDB: error de conexión: {error}")


if __name__ == "__main__":
    main()

