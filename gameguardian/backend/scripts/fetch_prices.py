import requests
from bs4 import BeautifulSoup

from find_games import find_games

import configs

def fetch_prices(platform, page_num=1):
    platforms = configs.platforms
    if platform not in platforms:
        return f"Plataforma {platform} não é suportada."

    config = platforms[platform]
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"
    }

    if "pagination" in config:
        pagination = config["pagination"]
        start_index = int(page_num) - 1 * int(pagination["page_size"])
        url = f"{pagination['base_url']}&{pagination['start_param']}={start_index}"
    else:
        url = config["url"]
    if platform == "steam":
        url = url + "&specials=1"

    response = requests.get(url, headers=headers)

    if response.status_code != 200:
        return "Erro ao acessar página."

    soup = BeautifulSoup(response.content, "html.parser")
    promo_games = soup.findAll(config["class"]["name"], config["class"]["attrs"])
    
    return find_games(promo_games, config)
