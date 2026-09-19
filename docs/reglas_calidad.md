# Reglas de calidad

| Regla | Acción de la ETL |
|---|---|
| La guía debe ser única | Conservar el registro con mayor `id_envio` |
| La guía no debe tener espacios y se almacena en mayúscula | Aplicar `strip()` y `upper()` |
| El peso debe estar en kilogramos y ser positivo | Convertir gramos; reemplazar inválidos con la mediana |
| Las ciudades deben usar un nombre canónico | Quitar espacios, normalizar mayúsculas y tildes |
| Las fechas deben ser válidas | Convertir con `errors="coerce"` |
| Los eventos deben tener identificador único | Eliminar duplicados por `id_evento` |
| Una calificación válida está entre 1 y 5 | Los valores fuera del rango pasan a nulo |
| Correo, teléfono y observaciones internas no son analíticos | Eliminar antes de integrar |

## Defectos sembrados

- Dos guías operacionales repetidas.
- Pesos negativos y nulos.
- Pesos expresados en gramos y kilogramos.
- Ciudades y estados con diferentes formatos.
- Eventos duplicados y una fecha inválida.
- Calificación fuera del rango.
- Encuesta duplicada.
- Entregas sin fecha final.

