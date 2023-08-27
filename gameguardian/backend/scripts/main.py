import sys
from fetch_prices import fetch_prices
from configs import platforms
import json
if __name__ == '__main__':
    if len(sys.argv) > 1:
        platform = sys.argv[1]
        page = sys.argv[2]
        result = fetch_prices(platform, page)
        if (result):
            str_result = '\n'.join(map(str, result))
            print(str_result.encode('utf-8'))
        else: 
            print("Nenhum resultado encontrado.")
    else:
        print("Nenhuma plataforma especificada.")
