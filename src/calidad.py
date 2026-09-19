import pandas as pd


def crear_reporte_calidad(fuentes: dict[str, pd.DataFrame]) -> pd.DataFrame:
    filas = []
    for nombre, df in fuentes.items():
        filas.append({
            "fuente": nombre,
            "filas": len(df),
            "columnas": len(df.columns),
            "valores_nulos": int(df.isna().sum().sum()),
            "filas_duplicadas_exactas": int(df.duplicated().sum()),
        })
    return pd.DataFrame(filas)

