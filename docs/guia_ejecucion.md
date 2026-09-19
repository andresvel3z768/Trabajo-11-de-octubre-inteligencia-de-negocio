# Guía de ejecución y verificación

## 1. Preparar Python

Crear el entorno virtual, instalar `requirements.txt` y copiar `.env.example` como `.env`.

## 2. Generar las fuentes

Ejecutar `python scripts/generar_datos.py`. El generador usa una semilla fija, por lo que siempre produce el mismo laboratorio.

## 3. Levantar las bases

Ejecutar `docker compose up -d` y esperar a que ambos servicios estén saludables. Verificar con `python scripts/probar_conexiones.py`.

## 4. Ejecutar la ETL

Ejecutar `python scripts/ejecutar_etl.py`.

## 5. Revisar resultados

- `datos/salida/reporte_calidad_inicial.csv`
- `datos/salida/sabana_logistica.csv`
- `datos/salida/indicadores_ciudad.csv`
- `sqlite/logistica_analitica.db`
- `logs/etl.log`

## 6. Ejecutar pruebas

Ejecutar `pytest -q` desde la raíz del proyecto.

## Nota sobre visualización

El CSV final puede importarse directamente en Power BI o cargarse en una fuente admitida por Looker Studio. SQLite conserva el producto analítico y permite practicar consultas SQL locales.

