"""Ejemplo de adaptación. Requiere Airflow instalado en un entorno separado."""

from datetime import datetime

from airflow import DAG
from airflow.operators.python import PythonOperator

from src.carga import cargar_resultados
from src.extraccion import extraer_todo
from src.transformacion import construir_sabana


def tarea_extraer(**contexto):
    fuentes = extraer_todo()
    rutas = {}
    for nombre, dataframe in fuentes.items():
        ruta = f"datos/intermedios/{nombre}.csv"
        dataframe.to_csv(ruta, index=False)
        rutas[nombre] = ruta
    contexto["ti"].xcom_push(key="rutas", value=rutas)


def tarea_transformar(**contexto):
    import pandas as pd

    rutas = contexto["ti"].xcom_pull(task_ids="extraer", key="rutas")
    fuentes = {nombre: pd.read_csv(ruta) for nombre, ruta in rutas.items()}
    sabana = construir_sabana(fuentes)
    sabana.to_csv("datos/intermedios/sabana.csv", index=False)


def tarea_cargar():
    import pandas as pd

    sabana = pd.read_csv("datos/intermedios/sabana.csv")
    cargar_resultados(sabana)


with DAG(
    dag_id="etl_logistica",
    start_date=datetime(2026, 1, 1),
    schedule=None,
    catchup=False,
    tags=["educativo", "etl"],
) as dag:
    extraer = PythonOperator(task_id="extraer", python_callable=tarea_extraer)
    transformar = PythonOperator(task_id="transformar", python_callable=tarea_transformar)
    cargar = PythonOperator(task_id="cargar", python_callable=tarea_cargar)

    extraer >> transformar >> cargar

