import sys
from fetch_prices import fetch_prices
if __name__ == '__main__':
    if len(sys.argv) > 1:
        platform = sys.argv[1]
        result = fetch_prices(platform)
        print(result)
    else:
        print("Nenhuma plataforma especificada.")
