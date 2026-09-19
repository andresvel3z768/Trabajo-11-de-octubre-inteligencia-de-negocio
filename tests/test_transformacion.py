import pandas as pd

from src.transformacion import limpiar_envios, limpiar_eventos, transformar_metas


def test_melt_convierte_meses_en_filas():
    metas = pd.DataFrame({"ciudad_destino": ["medellin"], "meta_1": [90], "meta_2": [92], "meta_3": [94]})
    resultado = transformar_metas(metas)
    assert len(resultado) == 3
    assert resultado["mes"].tolist() == [1, 2, 3]


def test_limpieza_envios_normaliza_peso_y_elimina_duplicado():
    envios = pd.DataFrame({
        "id_envio": [1, 2], "numero_guia": ["abc", " ABC "], "ciudad_origen": ["medellin", "MEDELLÍN"],
        "ciudad_destino": ["bogota", "Bogotá"], "tipo_servicio": ["expres", "EXPRES"],
        "fecha_creacion": ["2026-01-01", "2026-01-01"], "fecha_prometida": ["2026-01-02", "2026-01-02"],
        "fecha_entrega": ["2026-01-02", "2026-01-02"], "peso": [2500, 3], "unidad_peso": ["g", "kg"],
        "observacion_interna": ["x", "y"],
    })
    resultado = limpiar_envios(envios)
    assert len(resultado) == 1
    assert resultado.iloc[0]["peso_kg"] == 3
    assert "observacion_interna" not in resultado.columns


def test_eventos_descarta_fecha_invalida_y_duplicados():
    eventos = pd.DataFrame([
        {"id_evento": "1", "numero_guia": "a", "fecha_evento": "2026-01-01", "estado": "en transito", "ciudad": "cali", "tipo_novedad": None},
        {"id_evento": "1", "numero_guia": "a", "fecha_evento": "2026-01-01", "estado": "en transito", "ciudad": "cali", "tipo_novedad": None},
        {"id_evento": "2", "numero_guia": "b", "fecha_evento": "mal", "estado": "creado", "ciudad": "cali", "tipo_novedad": None},
    ])
    resultado = limpiar_eventos(eventos)
    assert len(resultado) == 1
    assert resultado.iloc[0]["estado"] == "EN_TRANSITO"

