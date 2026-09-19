import logging
import unicodedata

import pandas as pd


logger = logging.getLogger(__name__)

CIUDADES = {
    "bogota": "Bogotá",
    "medellin": "Medellín",
    "cali": "Cali",
    "barranquilla": "Barranquilla",
    "cartagena": "Cartagena",
    "pereira": "Pereira",
    "armenia": "Armenia",
    "manizales": "Manizales",
}

ESTADOS = {
    "creado": "CREADO",
    "recogido": "RECOGIDO",
    "en transito": "EN_TRANSITO",
    "en_transito": "EN_TRANSITO",
    "entregado": "ENTREGADO",
    "devuelto": "DEVUELTO",
}


def quitar_tildes(valor):
    if pd.isna(valor):
        return valor
    texto = unicodedata.normalize("NFKD", str(valor))
    return "".join(caracter for caracter in texto if not unicodedata.combining(caracter))


def normalizar_ciudad(valor):
    if pd.isna(valor):
        return valor
    clave = quitar_tildes(valor).strip().lower()
    return CIUDADES.get(clave, str(valor).strip().title())


def normalizar_estado(valor):
    if pd.isna(valor):
        return "DESCONOCIDO"
    clave = quitar_tildes(valor).strip().lower()
    return ESTADOS.get(clave, clave.upper().replace(" ", "_"))


def limpiar_envios(envios: pd.DataFrame) -> pd.DataFrame:
    df = envios.copy()
    df["numero_guia"] = df["numero_guia"].astype(str).str.strip().str.upper()
    df["ciudad_origen"] = df["ciudad_origen"].apply(normalizar_ciudad)
    df["ciudad_destino"] = df["ciudad_destino"].apply(normalizar_ciudad)
    df["tipo_servicio"] = df["tipo_servicio"].str.strip().str.upper()
    df["fecha_creacion"] = pd.to_datetime(df["fecha_creacion"], errors="coerce")
    df["fecha_prometida"] = pd.to_datetime(df["fecha_prometida"], errors="coerce")
    df["fecha_entrega"] = pd.to_datetime(df["fecha_entrega"], errors="coerce")
    df["peso"] = pd.to_numeric(df["peso"], errors="coerce")
    es_gramos = df["unidad_peso"].str.strip().str.lower().eq("g")
    df["peso_kg"] = df["peso"].where(~es_gramos, df["peso"] / 1000)
    df.loc[df["peso_kg"] <= 0, "peso_kg"] = pd.NA
    df["peso_kg"] = df["peso_kg"].fillna(df["peso_kg"].median()).round(2)
    df = df.sort_values("id_envio").drop_duplicates("numero_guia", keep="last")
    return df.drop(columns=["peso", "unidad_peso", "observacion_interna"], errors="ignore")


def limpiar_clientes(clientes: pd.DataFrame) -> pd.DataFrame:
    df = clientes.copy()
    df["nombre_cliente"] = df["nombre_cliente"].str.strip().str.title()
    df["segmento"] = df["segmento"].fillna("SIN_CLASIFICAR").str.strip().str.upper()
    return df.drop(columns=["correo", "telefono"], errors="ignore")


def limpiar_eventos(eventos: pd.DataFrame) -> pd.DataFrame:
    df = eventos.copy()
    df["numero_guia"] = df["numero_guia"].astype(str).str.strip().str.upper()
    df["fecha_evento"] = pd.to_datetime(df["fecha_evento"], errors="coerce")
    df["estado"] = df["estado"].apply(normalizar_estado)
    df["ciudad"] = df["ciudad"].apply(normalizar_ciudad)
    df["tipo_novedad"] = df["tipo_novedad"].fillna("SIN_NOVEDAD").str.strip().str.upper()
    df = df.dropna(subset=["fecha_evento"])
    return df.drop_duplicates("id_evento", keep="last")


def transformar_metas(metas: pd.DataFrame) -> pd.DataFrame:
    """Convierte las columnas de meses en filas mediante melt."""
    df = metas.copy()
    df["ciudad_destino"] = df["ciudad_destino"].apply(normalizar_ciudad)
    columnas_mes = [col for col in df.columns if col.startswith("meta_")]
    df = df.melt(
        id_vars=["ciudad_destino"],
        value_vars=columnas_mes,
        var_name="mes",
        value_name="meta_cumplimiento",
    )
    df["mes"] = df["mes"].str.replace("meta_", "", regex=False).astype(int)
    return df


def agregar_eventos(eventos: pd.DataFrame) -> pd.DataFrame:
    ordenados = eventos.sort_values("fecha_evento")
    resumen = ordenados.groupby("numero_guia").agg(
        cantidad_eventos=("id_evento", "count"),
        cantidad_novedades=("tipo_novedad", lambda s: (s != "SIN_NOVEDAD").sum()),
        ultimo_estado=("estado", "last"),
        fecha_ultimo_evento=("fecha_evento", "max"),
    ).reset_index()
    novedades = ordenados[ordenados["tipo_novedad"] != "SIN_NOVEDAD"]
    principal = novedades.groupby("numero_guia")["tipo_novedad"].first().rename("novedad_principal")
    resumen = resumen.merge(principal, on="numero_guia", how="left")
    resumen["novedad_principal"] = resumen["novedad_principal"].fillna("SIN_NOVEDAD")
    return resumen


def construir_sabana(fuentes: dict[str, pd.DataFrame]) -> pd.DataFrame:
    logger.info("Iniciando limpieza e integración")
    envios = limpiar_envios(fuentes["envios"])
    clientes = limpiar_clientes(fuentes["clientes"])
    vehiculos = fuentes["vehiculos"].copy()
    conductores = fuentes["conductores"].copy()
    conductores = conductores.drop(columns=["licencia"], errors="ignore")
    eventos = agregar_eventos(limpiar_eventos(fuentes["eventos"]))
    metas = transformar_metas(fuentes["metas"])

    tarifas = fuentes["tarifas"].copy()
    tarifas["tipo_servicio"] = tarifas["tipo_servicio"].str.strip().str.upper()
    tarifas["ciudad_destino"] = tarifas["ciudad_destino"].apply(normalizar_ciudad)

    satisfaccion = fuentes["satisfaccion"].copy()
    satisfaccion["numero_guia"] = satisfaccion["numero_guia"].astype(str).str.strip().str.upper()
    satisfaccion["calificacion"] = pd.to_numeric(satisfaccion["calificacion"], errors="coerce")
    satisfaccion.loc[~satisfaccion["calificacion"].between(1, 5), "calificacion"] = pd.NA
    satisfaccion = satisfaccion.drop_duplicates("numero_guia", keep="last")

    sabana = envios.merge(clientes, on="id_cliente", how="left")
    sabana = sabana.merge(vehiculos, on="id_vehiculo", how="left")
    sabana = sabana.merge(conductores, on="id_conductor", how="left")
    sabana = sabana.merge(eventos, on="numero_guia", how="left")
    sabana = sabana.merge(tarifas, on=["tipo_servicio", "ciudad_destino"], how="left")
    sabana["mes"] = sabana["fecha_creacion"].dt.month
    sabana = sabana.merge(metas, on=["ciudad_destino", "mes"], how="left")
    sabana = sabana.merge(satisfaccion[["numero_guia", "calificacion"]], on="numero_guia", how="left")

    sabana["cantidad_eventos"] = sabana["cantidad_eventos"].fillna(0).astype(int)
    sabana["cantidad_novedades"] = sabana["cantidad_novedades"].fillna(0).astype(int)
    sabana["ultimo_estado"] = sabana["ultimo_estado"].fillna("SIN_TRAZABILIDAD")
    sabana["novedad_principal"] = sabana["novedad_principal"].fillna("SIN_NOVEDAD")
    sabana["dias_entrega"] = (sabana["fecha_entrega"] - sabana["fecha_creacion"]).dt.days
    sabana["entrega_oportuna"] = sabana["fecha_entrega"].notna() & (
        sabana["fecha_entrega"] <= sabana["fecha_prometida"]
    )
    kilos_extra = (sabana["peso_kg"] - sabana["kilos_incluidos"]).clip(lower=0)
    sabana["costo_total"] = (
        sabana["tarifa_base"]
        + kilos_extra * sabana["valor_kilo_adicional"]
        + sabana["cantidad_novedades"] * 2500
    ).round(0)
    sabana["cumple_meta_individual"] = (
        sabana["entrega_oportuna"].astype(int) * 100 >= sabana["meta_cumplimiento"]
    )
    logger.info("Sábana construida: %s filas y %s columnas", *sabana.shape)
    return sabana.sort_values("numero_guia").reset_index(drop=True)
