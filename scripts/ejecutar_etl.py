from pathlib import Path
import sys


sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

from src.pipeline import ejecutar_pipeline


if __name__ == "__main__":
    resultado = ejecutar_pipeline()
    print(f"ETL terminada. Filas generadas: {len(resultado)}")

