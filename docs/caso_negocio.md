# Caso de negocio: Logística Andina

Logística Andina presta servicios de recogida, transporte y entrega de mercancías en ocho ciudades colombianas. La empresa registra sus datos en sistemas separados:

- MySQL conserva clientes, envíos, vehículos y conductores.
- MongoDB registra los eventos de trazabilidad de cada guía.
- Archivos CSV contienen tarifas, metas mensuales y encuestas de satisfacción.

La dirección necesita un único conjunto de datos para evaluar la oportunidad de las entregas, novedades, costos y satisfacción. El reto consiste en extraer, limpiar, transformar e integrar las fuentes y cargar el resultado en SQLite.

## Preguntas de análisis

1. ¿Qué porcentaje de entregas fue oportuno por ciudad?
2. ¿Cuáles ciudades y servicios presentan más novedades?
3. ¿Cuál es el costo promedio de los envíos?
4. ¿Qué relación existe entre oportunidad y satisfacción?
5. ¿Cómo se compara el resultado con la meta mensual?

