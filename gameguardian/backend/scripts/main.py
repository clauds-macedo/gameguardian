import sys
from fetch_prices import fetch_prices
from configs import platforms
import json


def main():
    if len(sys.argv) > 1:
        page = sys.argv[1]
        result = fetch_prices("steam", page)
        if result:
            json_result = json.dumps(result, ensure_ascii=True)
            print(json_result)
        else:
            print(
                json.dumps(
                    {"error": "Nenhum resultado encontrado."}, ensure_ascii=False
                )
            )
    else:
        print(
            json.dumps(
                {"error": "Nenhuma plataforma especificada."}, ensure_ascii=False
            )
        )


if __name__ == "__main__":
    main()
