import requests
from bs4 import BeautifulSoup
import re

def fetch_prices(platform, page_num=1):
    response = requests.get("https://store.steampowered.com/search/?ignore_preferences=1&specials=1&ndl=1")
    
    content_type = response.headers.get('Content-Type')
    print(content_type)
    app_id_pattern = re.compile(r'/app/(\d+)')
    
    if "html" in content_type:
        soup = BeautifulSoup(response.content, "html.parser")
        promo_games_with_app = [promo for promo in soup.findAll("a", href=True) if "app" in promo["href"]]
        print(promo_games_with_app)
        id_list = []
        for promo in promo_games_with_app:
            match = app_id_pattern.search(promo["href"])
            if match:
                app_id = match.group(1)
                id_list.append(app_id)
        print(id_list)

    elif "json" in content_type:
        data = response.json()
        if 'results_html' in data:
            soup = BeautifulSoup(data['results_html'], "html.parser")
            
            promo_games_with_app = [promo for promo in soup.findAll("a", href=True) if "app" in promo["href"]]
            id_list = []
            for promo in promo_games_with_app:
                match = app_id_pattern.search(promo["href"])
                if match:
                    app_id = match.group(1)
                    id_list.append(app_id)
            print(id_list)

fetch_prices("steam")
