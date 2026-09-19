# Validación del proyecto maestro

La generación determinística produce:

- 240 registros operacionales de envíos.
- 938 documentos de eventos, incluidos defectos intencionales.
- 238 guías únicas después de la depuración.
- 33 columnas en la sábana analítica.
- 6 notebooks válidos.
- 3 pruebas unitarias de transformación.

## Controles ejecutados

- Compilación de todos los archivos Python.
- Validación de la estructura JSON de los notebooks.
- Pruebas de `melt`, normalización de peso, duplicados y eventos inválidos.
- Ejecución integral en memoria con los datos generados.
- Escritura y consulta de la base SQLite.

La ejecución contra los contenedores utiliza las mismas fuentes generadas. Debe realizarse en un equipo con Docker Desktop, ya que el entorno donde se preparó el material no dispone del ejecutable de Docker.

