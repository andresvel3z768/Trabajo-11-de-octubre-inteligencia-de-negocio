"""Construye los notebooks pedagógicos a partir de celdas simples y editables."""

from pathlib import Path
import json


BASE = Path(__file__).resolve().parents[1]
DESTINO = BASE / "notebooks"


def celda_markdown(texto):
    return {"cell_type": "markdown", "metadata": {}, "source": [linea + "\n" for linea in texto.strip().splitlines()]}


def celda_codigo(codigo):
    return {"cell_type": "code", "execution_count": None, "metadata": {}, "outputs": [], "source": [linea + "\n" for linea in codigo.strip().splitlines()]}


def guardar(nombre, titulo, objetivo, celdas):
    contenido = {
        "cells": [celda_markdown(f"# {titulo}\n\n{objetivo}")] + celdas,
        "metadata": {"kernelspec": {"display_name": "Python 3", "language": "python", "name": "python3"}, "language_info": {"name": "python", "version": "3.11"}},
        "nbformat": 4,
        "nbformat_minor": 5,
    }
    (DESTINO / nombre).write_text(json.dumps(contenido, ensure_ascii=False, indent=2), encoding="utf-8")


def main():
    DESTINO.mkdir(parents=True, exist_ok=True)
    preparacion = celda_codigo("""from pathlib import Path
import sys

BASE_DIR = Path.cwd().parent if Path.cwd().name == "notebooks" else Path.cwd()
sys.path.insert(0, str(BASE_DIR))""")

    guardar("01_extraccion.ipynb", "1. Extracción de datos", "Conectaremos una fuente a la vez y convertiremos los resultados en DataFrames.", [
        preparacion,
        celda_codigo("""from src.extraccion import extraer_mysql, extraer_mongodb, extraer_csv

datos_mysql = extraer_mysql()
envios = datos_mysql["envios"]
envios.head()"""),
        celda_codigo("""eventos = extraer_mongodb()
eventos.head()"""),
        celda_codigo("""datos_csv = extraer_csv()
metas = datos_csv["metas"]
metas.head()"""),
    ])

    guardar("02_exploracion_calidad.ipynb", "2. Exploración y calidad", "Identificaremos nulos, duplicados, tipos incorrectos y valores inconsistentes.", [
        preparacion,
        celda_codigo("""from src.extraccion import extraer_todo
from src.calidad import crear_reporte_calidad

fuentes = extraer_todo()
crear_reporte_calidad(fuentes)"""),
        celda_codigo("""envios = fuentes["envios"]
envios.info()"""),
        celda_codigo("""envios.isna().sum()"""),
        celda_codigo("""envios[envios.duplicated("numero_guia", keep=False)].sort_values("numero_guia")"""),
        celda_codigo("""envios["ciudad_destino"].value_counts(dropna=False)"""),
    ])

    guardar("03_limpieza.ipynb", "3. Limpieza", "Aplicaremos funciones sencillas y compararemos los datos antes y después.", [
        preparacion,
        celda_codigo("""from src.extraccion import extraer_todo
from src.transformacion import limpiar_envios, limpiar_clientes, limpiar_eventos

fuentes = extraer_todo()"""),
        celda_codigo("""envios_limpios = limpiar_envios(fuentes["envios"])
envios_limpios[["numero_guia", "ciudad_destino", "peso_kg"]].head(10)"""),
        celda_codigo("""clientes_limpios = limpiar_clientes(fuentes["clientes"])
clientes_limpios.head()"""),
        celda_codigo("""eventos_limpios = limpiar_eventos(fuentes["eventos"])
eventos_limpios.head()"""),
    ])

    guardar("04_melt_y_agregaciones.ipynb", "4. Melt y agregaciones", "Transformaremos metas horizontales y resumiremos muchos eventos por guía.", [
        preparacion,
        celda_codigo("""from src.extraccion import extraer_todo
from src.transformacion import transformar_metas, limpiar_eventos, agregar_eventos

fuentes = extraer_todo()"""),
        celda_codigo("""fuentes["metas"]"""),
        celda_codigo("""metas_verticales = transformar_metas(fuentes["metas"])
metas_verticales.head(12)"""),
        celda_codigo("""resumen_eventos = agregar_eventos(limpiar_eventos(fuentes["eventos"]))
resumen_eventos.head()"""),
    ])

    guardar("05_integracion.ipynb", "5. Integración", "Uniremos las fuentes y calcularemos las variables analíticas.", [
        preparacion,
        celda_codigo("""from src.extraccion import extraer_todo
from src.transformacion import construir_sabana

fuentes = extraer_todo()
sabana = construir_sabana(fuentes)
sabana.head()"""),
        celda_codigo("""sabana.shape"""),
        celda_codigo("""sabana.groupby("ciudad_destino").agg(
    total_envios=("numero_guia", "count"),
    oportunidad=("entrega_oportuna", "mean"),
    costo_promedio=("costo_total", "mean")
).reset_index()"""),
    ])

    guardar("06_carga_sqlite.ipynb", "6. Carga en SQLite", "Guardaremos la sábana, consultaremos el resultado y revisaremos las salidas.", [
        preparacion,
        celda_codigo("""from src.extraccion import extraer_todo
from src.transformacion import construir_sabana
from src.carga import cargar_resultados

sabana = construir_sabana(extraer_todo())
cargar_resultados(sabana)"""),
        celda_codigo("""import sqlite3
import pandas as pd
from src.config import SQLITE_PATH

with sqlite3.connect(SQLITE_PATH) as conexion:
    indicadores = pd.read_sql_query("SELECT * FROM indicadores_ciudad", conexion)

indicadores"""),
    ])
    print(f"Se generaron 6 notebooks en {DESTINO}")


if __name__ == "__main__":
    main()

