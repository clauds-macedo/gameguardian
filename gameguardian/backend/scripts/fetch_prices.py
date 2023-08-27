import requests
from bs4 import BeautifulSoup

from find_games import find_games

import configs

def fetch_prices(platform):
    platforms = configs.platforms
    if platform not in platforms:
        print(f"Plataforma {platform} não é suportada.")
        return

    config = platforms[platform]
    url = config["url"]
    headers = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"

    response = requests.get(url, headers)

    if response.status_code != 200:
        print("Erro ao acessar página.")
        return

    soup = BeautifulSoup(response.content, "html.parser")
    promo_games = soup.findAll(config["class"]["name"], config["class"]["attrs"])

    return find_games(promo_games, config)
