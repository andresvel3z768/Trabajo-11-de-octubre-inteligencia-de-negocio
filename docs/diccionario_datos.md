# Diccionario de la sábana logística

| Campo | Descripción |
|---|---|
| numero_guia | Identificador normalizado del envío |
| fecha_creacion | Momento en que se creó la orden |
| fecha_prometida | Compromiso de entrega |
| fecha_entrega | Fecha real, si el envío fue entregado |
| ciudad_origen | Ciudad de recogida normalizada |
| ciudad_destino | Ciudad de entrega normalizada |
| tipo_servicio | Estándar, exprés o mismo día |
| peso_kg | Peso unificado en kilogramos |
| nombre_cliente | Cliente remitente |
| segmento | Segmento comercial |
| placa | Identificador del vehículo asignado |
| tipo_vehiculo | Clase de vehículo utilizada |
| capacidad_kg | Capacidad registrada del vehículo |
| nombre_conductor | Conductor asignado, sin exponer su licencia |
| cantidad_eventos | Eventos válidos de trazabilidad |
| cantidad_novedades | Eventos que reportaron una novedad |
| ultimo_estado | Último estado conocido |
| novedad_principal | Primera novedad válida reportada |
| meta_cumplimiento | Meta de oportunidad para ciudad y mes |
| calificacion | Evaluación del cliente entre 1 y 5 |
| dias_entrega | Diferencia entre creación y entrega |
| entrega_oportuna | Indica si se cumplió la fecha prometida |
| costo_total | Tarifa más peso adicional y recargos por novedades |
