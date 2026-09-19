USE logistica;
CREATE TABLE clientes (
  id_cliente INT PRIMARY KEY, nombre_cliente VARCHAR(100), segmento VARCHAR(30),
  correo VARCHAR(120), telefono VARCHAR(30)
);
CREATE TABLE vehiculos (
  id_vehiculo INT PRIMARY KEY, placa VARCHAR(20), tipo_vehiculo VARCHAR(30), capacidad_kg DECIMAL(10,2)
);
CREATE TABLE conductores (
  id_conductor INT PRIMARY KEY, nombre_conductor VARCHAR(100), licencia VARCHAR(30)
);
CREATE TABLE envios (
  id_envio INT PRIMARY KEY, numero_guia VARCHAR(30), id_cliente INT, id_vehiculo INT, id_conductor INT,
  ciudad_origen VARCHAR(60), ciudad_destino VARCHAR(60), tipo_servicio VARCHAR(30),
  peso DECIMAL(12,2), unidad_peso VARCHAR(10), fecha_creacion DATETIME,
  fecha_prometida DATETIME, fecha_entrega DATETIME NULL, observacion_interna VARCHAR(200)
);
