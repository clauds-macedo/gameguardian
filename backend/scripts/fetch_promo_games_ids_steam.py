import requests
from bs4 import BeautifulSoup
import re
import sys

def fetch_promo_games_ids_steam() -> list[str]:
    response = requests.get("https://store.steampowered.com/search/?ignore_preferences=1&specials=1&ndl=1   ")
    
    content_type = response.headers.get('Content-Type')
    # print(content_type)
    app_id_pattern = re.compile(r'/app/(\d+)')
    
    if "html" in content_type:
        soup = BeautifulSoup(response.content, "html.parser")
        promo_games_with_app = [promo for promo in soup.findAll("a", href=True) if "app" in promo["href"]]
        # print(promo_games_with_app)
        id_list:list[str] = []
        for promo in promo_games_with_app:
            match = app_id_pattern.search(promo["href"])
            if match:
                app_id = match.group(1)
                id_list.append(app_id)
        return id_list

    elif "json" in content_type:
        data = response.json()
        if 'results_html' in data:
            soup = BeautifulSoup(data['results_html'], "html.parser")
            
            promo_games_with_app = [promo for promo in soup.findAll("a", href=True) if "app" in promo["href"]]
            id_list:list[str] = []
            for promo in promo_games_with_app:
                match = app_id_pattern.search(promo["href"])
                if match:
                    app_id = match.group(1)
                    id_list.append(app_id)
            return id_list