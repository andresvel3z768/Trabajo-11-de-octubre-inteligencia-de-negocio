import pandas as pd

def crear_reporte_calidad(fuentes: dict[str, pd.DataFrame]) -> pd.DataFrame:
    """
    Recorre un diccionario de DataFrames y genera un reporte consolidado 
    de calidad de datos.
    """
    filas = []
    for nombre, df in fuentes.items():
        df_temp = df.copy()
        
        # Convertimos temporalmente columnas complejas (listas o diccionarios) a string 
        # para evitar el error 'TypeError: unhashable type: list' al buscar duplicados.
        for col in df_temp.columns:
            if df_temp[col].apply(lambda x: isinstance(x, (list, dict))).any():
                df_temp[col] = df_temp[col].astype(str)
                
        filas.append({
            "fuente": nombre,
            "filas": len(df),
            "columnas": len(df.columns),
            "valores_nulos": int(df.isna().sum().sum()),
            "filas_duplicadas_exactas": int(df_temp.duplicated().sum()), # <--- Debe ser df_temp
        })
        
    return pd.DataFrame(filas)
