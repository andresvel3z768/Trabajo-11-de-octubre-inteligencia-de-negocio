"""Genera datos reproducibles con defectos intencionales para el laboratorio."""

from datetime import datetime, timedelta
import json
from pathlib import Path
import random

import pandas as pd


BASE_DIR = Path(__file__).resolve().parents[1]
RNG = random.Random(2026)

CIUDADES = ["Bogotá", "Medellín", "Cali", "Barranquilla", "Cartagena", "Pereira", "Armenia", "Manizales"]
VARIANTES = {
    "Bogotá": ["Bogotá", "bogota", " BOGOTÁ "],
    "Medellín": ["Medellín", "medellin", " MEDELLÍN"],
    "Cali": ["Cali", "cali", " CALI "],
    "Barranquilla": ["Barranquilla", "barranquilla"],
    "Cartagena": ["Cartagena", "cartagena"],
    "Pereira": ["Pereira", "pereira"],
    "Armenia": ["Armenia", "armenia"],
    "Manizales": ["Manizales", "manizales"],
}
SERVICIOS = ["ESTANDAR", "EXPRES", "MISMO_DIA"]


def sql_valor(valor):
    if valor is None:
        return "NULL"
    if isinstance(valor, (int, float)):
        return str(valor)
    return "'" + str(valor).replace("'", "''") + "'"


def generar_clientes():
    segmentos = ["CORPORATIVO", "PYME", "PERSONA"]
    return [
        (i, f"Cliente {i:03d}", RNG.choice(segmentos + [None]), f"cliente{i}@correo.com", f"300{i:07d}")
        for i in range(1, 41)
    ]


def generar_recursos():
    vehiculos = [(i, f"TRK{i:03d}", RNG.choice(["CAMION", "VAN", "MOTO"]), RNG.randint(300, 8000)) for i in range(1, 16)]
    conductores = [(i, f"Conductor {i:02d}", f"LIC{i:05d}") for i in range(1, 21)]
    return vehiculos, conductores


def generar_envios(cantidad=240):
    inicio = datetime(2026, 1, 1)
    filas = []
    for i in range(1, cantidad + 1):
        fecha = inicio + timedelta(days=RNG.randint(0, 89), hours=RNG.randint(6, 18))
        servicio = RNG.choice(SERVICIOS)
        plazo = {"MISMO_DIA": 0, "EXPRES": 1, "ESTANDAR": 3}[servicio]
        prometida = fecha + timedelta(days=plazo)
        entregada = None if RNG.random() < 0.08 else prometida + timedelta(days=RNG.choice([-1, 0, 0, 0, 1, 2]))
        peso_kg = round(RNG.uniform(0.2, 35), 2)
        unidad = RNG.choice(["kg", "kg", "kg", "g"])
        peso = int(peso_kg * 1000) if unidad == "g" else peso_kg
        if i in (21, 97):
            peso = -5
        if i in (33, 144):
            peso = None
        guia_num = i - 1 if i in (80, 160) else i
        guia = f"LG-{guia_num:05d}"
        if i % 37 == 0:
            guia = " " + guia.lower() + " "
        origen = RNG.choice(CIUDADES)
        destino = RNG.choice([c for c in CIUDADES if c != origen])
        filas.append((
            i, guia, RNG.randint(1, 40), RNG.randint(1, 15), RNG.randint(1, 20),
            RNG.choice(VARIANTES[origen]), RNG.choice(VARIANTES[destino]), servicio.lower() if i % 29 == 0 else servicio,
            peso, unidad, fecha.isoformat(sep=" "), prometida.isoformat(sep=" "),
            entregada.isoformat(sep=" ") if entregada else None, "Dato operativo no analítico",
        ))
    return filas


def escribir_mysql(clientes, vehiculos, conductores, envios):
    destino = BASE_DIR / "bases_datos" / "mysql"
    destino.mkdir(parents=True, exist_ok=True)
    esquema = """USE logistica;
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
"""
    (destino / "01_crear_tablas.sql").write_text(esquema, encoding="utf-8")
    bloques = []
    for tabla, columnas, filas in [
        ("clientes", "id_cliente,nombre_cliente,segmento,correo,telefono", clientes),
        ("vehiculos", "id_vehiculo,placa,tipo_vehiculo,capacidad_kg", vehiculos),
        ("conductores", "id_conductor,nombre_conductor,licencia", conductores),
        ("envios", "id_envio,numero_guia,id_cliente,id_vehiculo,id_conductor,ciudad_origen,ciudad_destino,tipo_servicio,peso,unidad_peso,fecha_creacion,fecha_prometida,fecha_entrega,observacion_interna", envios),
    ]:
        valores = ",\n".join("(" + ",".join(sql_valor(v) for v in fila) + ")" for fila in filas)
        bloques.append(f"INSERT INTO {tabla} ({columnas}) VALUES\n{valores};")
    (destino / "02_cargar_datos.sql").write_text("\n\n".join(bloques), encoding="utf-8")


def generar_eventos(envios):
    eventos = []
    consecutivo = 1
    for envio in envios:
        guia = str(envio[1]).strip().upper()
        fecha = datetime.fromisoformat(envio[10])
        destino = str(envio[6]).strip()
        ruta = [
            ("CREADO", "SIN_NOVEDAD", 0),
            ("recogido", "SIN_NOVEDAD", 4),
            (RNG.choice(["EN TRANSITO", "en_transito"]), RNG.choice(["SIN_NOVEDAD", "DEMORA", "SIN_NOVEDAD"]), 16),
        ]
        if envio[12]:
            ruta.append(("entregado", "SIN_NOVEDAD", 36))
        for estado, novedad, horas in ruta:
            evento = {
                "id_evento": f"EV-{consecutivo:06d}",
                "numero_guia": guia.lower() if consecutivo % 43 == 0 else guia,
                "fecha_evento": (fecha + timedelta(hours=horas)).isoformat(),
                "estado": estado,
                "ciudad": destino,
                "tipo_novedad": None if novedad == "SIN_NOVEDAD" and consecutivo % 5 == 0 else novedad,
            }
            eventos.append(evento)
            consecutivo += 1
    eventos.append(dict(eventos[25]))  # duplicado intencional por id_evento
    eventos.append({
        "id_evento": "EV-ERR001", "numero_guia": "LG-99999", "fecha_evento": "fecha_invalida",
        "estado": "EN TRANSITO", "ciudad": "Bogotá", "tipo_novedad": "DIRECCION_ERRADA",
    })
    return eventos


def escribir_mongodb(eventos):
    destino = BASE_DIR / "bases_datos" / "mongodb"
    destino.mkdir(parents=True, exist_ok=True)
    contenido = "db = db.getSiblingDB('logistica');\ndb.eventos.drop();\ndb.eventos.insertMany(" + json.dumps(eventos, ensure_ascii=False, indent=2) + ");\n"
    (destino / "01_cargar_eventos.js").write_text(contenido, encoding="utf-8")


def escribir_csv(envios):
    destino = BASE_DIR / "datos" / "csv"
    destino.mkdir(parents=True, exist_ok=True)
    tarifas = []
    for ciudad in CIUDADES:
        for servicio in SERVICIOS:
            base = {"ESTANDAR": 14000, "EXPRES": 23000, "MISMO_DIA": 32000}[servicio]
            tarifas.append({"tipo_servicio": servicio, "ciudad_destino": ciudad, "tarifa_base": base + RNG.randint(0, 6) * 1000, "kilos_incluidos": 3, "valor_kilo_adicional": 1800})
    pd.DataFrame(tarifas).to_csv(destino / "tarifas.csv", index=False, encoding="utf-8-sig")

    metas = []
    for ciudad in CIUDADES:
        metas.append({"ciudad_destino": ciudad, "meta_1": RNG.randint(90, 95), "meta_2": RNG.randint(91, 96), "meta_3": RNG.randint(92, 97)})
    pd.DataFrame(metas).to_csv(destino / "metas_mensuales.csv", index=False, encoding="utf-8-sig")

    encuestas = []
    for envio in envios:
        if RNG.random() < 0.62:
            encuestas.append({"numero_guia": str(envio[1]).strip(), "calificacion": RNG.choice([1, 2, 3, 4, 4, 5, 5]), "comentario": RNG.choice(["Buen servicio", "Demora", "Sin comentarios", None])})
    encuestas.append({"numero_guia": "LG-00010", "calificacion": 8, "comentario": "Valor fuera del rango"})
    encuestas.append(dict(encuestas[5]))
    pd.DataFrame(encuestas).to_csv(destino / "satisfaccion_clientes.csv", index=False, encoding="utf-8-sig")


def main():
    clientes = generar_clientes()
    vehiculos, conductores = generar_recursos()
    envios = generar_envios()
    eventos = generar_eventos(envios)
    escribir_mysql(clientes, vehiculos, conductores, envios)
    escribir_mongodb(eventos)
    escribir_csv(envios)
    print(f"Datos generados: {len(envios)} envíos y {len(eventos)} eventos")


if __name__ == "__main__":
    main()

