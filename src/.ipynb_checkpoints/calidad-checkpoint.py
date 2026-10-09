import pandas as pd


def crear_reporte_calidad(fuentes: dict[str, pd.DataFrame]) -> pd.DataFrame:
    filas = []
    for nombre, df in fuentes.items():
        # Convertir temporalmente columnas con listas/diccionarios a string para evitar el error 'unhashable type: list'
        df_temp = df.copy()
        for col in df_temp.columns:
            if df_temp[col].apply(lambda x: isinstance(x, (list, dict))).any():
                df_temp[col] = df_temp[col].astype(str)
                
        filas.append({
            "fuente": nombre,
            "filas": len(df),
            "columnas": len(df.columns),
            "valores_nulos": int(df.isna().sum().sum()),
            "filas_duplicadas_exactas": int(df.duplicated().sum()),
        })
    return pd.DataFrame(filas)

