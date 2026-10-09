import logging
import pandas as pd
from pymongo import MongoClient


from src.config import MONGO_DATABASE, MONGO_URI


logger = logging.getLogger(__name__)


class MongoDBExtractor:
    def __init__(self, uri=MONGO_URI, database_name=MONGO_DATABASE):
        self.uri = uri
        self.database_name = database_name
        self.client = None
        self.db = None

    def connect(self):
        "Establece la conexión a la base de datos MongoDB."
        try:
            self.client = MongoClient(self.uri)
            self.db = self.client[self.database_name]
            #verficar la conexión
            self.client.admin.command("ping")
            logger.info("Conexión a MongoDB establecida correctamente.")
        except Exception as e:
            logger.error(f"Error al conectar a MongoDB: {e}")
            raise

    def extract_collection(self, collection_name) -> pd.DataFrame:
        "Extrae los datos de una colección específica y los devuelve como un DataFrame de pandas."
        if self.db is None:
            raise Exception("No hay conexión a la base de datos. Llama a connect() primero.")
        try:
            collection = self.db[collection_name]
            data = list(collection.find())
            df = pd.DataFrame(data)
            logger.info(f"Datos extraídos de la colección '{collection_name}' correctamente.")
            return df
        except Exception as e:
            logger.error(f"Error al extraer datos de la colección '{collection_name}': {e}")
            raise

    def extract_all_collections(self) -> dict[str, pd.DataFrame]:

        if self.db is None:
            self.connect()
            
        logger.info("Extrayendo datos de todas las colecciones de la base de datos.")
        colecciones = [name for name in self.db.list_collection_names() if not name.startswith("system.")]
        fuentes = {}
        #recorrer todas las colecciones y extraer sus datos
        for coleccion in colecciones:
            fuentes[coleccion] = self.extract_collection(coleccion)

        #cerrar la conexión después de la extracción
        if self.client:
            self.client.close()
            logger.info("Conexión a MongoDB cerrada correctamente.")

        return fuentes
    