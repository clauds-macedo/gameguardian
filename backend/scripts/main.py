import sys
from fetch_promo_games_ids_steam import fetch_promo_games_ids_steam 
from configs import platforms
import json

STEAM_URL = (
    "https://store.steampowered.com/search/?ignore_preferences=1&specials=1&ndl=1"
)


def main():
    if len(sys.argv) >= 2:
        url = ""
        platform = sys.argv[1]
        if platform == "STEAM":
            url = STEAM_URL

        result = fetch_promo_games_ids_steam()
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
