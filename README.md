# ETL de alojamiento airbnb

Proyecto maestro para enseñar una ETL completa con Python y pandas. Integra datos de MongoDB, corrige problemas de calidad, construye una sábana analítica y la carga en SQLite.

## Requisitos

- Python 3.11 o superior.
- Docker Desktop con Docker Compose.
- Un editor como Visual Studio Code.

## Puesta en marcha

```bash
python -m venv .venv
# Windows PowerShell
.venv\Scripts\Activate.ps1
pip install -r requirements.txt
copy .env.example .env
python scripts/generar_datos.py
docker compose up -d
python scripts/probar_conexiones.py
python scripts/ejecutar_etl.py
python lab 
```

En Linux o macOS, active el entorno con `source .venv/bin/activate` y copie el archivo con `cp .env.example .env`.

El resultado queda en `sqlite/logistica_analitica.db` y `datos/salida/sabana_logistica.csv`.

## Reiniciar las fuentes

```bash
docker compose down -v
python scripts/generar_datos.py
docker compose up -d
```

## Recorrido sugerido

1. Ejecutar los notebooks numerados.
2. Comparar cada notebook con los módulos de `src`.
3. Ejecutar el pipeline completo.
4. Revisar el log y el reporte de calidad.
5. Examinar la adaptación de las funciones al DAG de Airflow.

