# Modelo de datos

## MySQL

- `clientes`: datos comerciales y datos personales que no deben pasar a la sábana.
- `vehiculos`: placa, tipo y capacidad.
- `conductores`: conductor y licencia.
- `envios`: guía, ruta, servicio, peso y fechas del compromiso.

## MongoDB

- `eventos`: historia de estados y novedades de cada guía.

## CSV

- `tarifas.csv`: precio base, kilos incluidos y valor adicional.
- `metas_mensuales.csv`: una columna por mes; obliga a transformar de formato ancho a largo.
- `satisfaccion_clientes.csv`: calificación opcional de cada envío.

## Resultado

La tabla `sabana_logistica` tiene granularidad de una fila por número de guía. La tabla `indicadores_ciudad` resume la operación por destino.

