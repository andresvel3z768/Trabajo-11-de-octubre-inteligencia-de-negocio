# Adaptación a Airflow

El DAG reutiliza las funciones del proyecto y las distribuye en tres tareas: extracción, transformación y carga. Airflow debe instalarse en un entorno independiente debido a la cantidad de dependencias que incorpora. El archivo se presenta como cierre conceptual; no es necesario para ejecutar la ETL principal.

