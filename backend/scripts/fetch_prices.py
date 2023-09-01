import requests
from bs4 import BeautifulSoup
import re

def fetch_prices(platform, page_num=1):
    response = requests.get("https://store.steampowered.com/search/results/?query&start=50&count=300&dynamic_data=&sort_by=_ASC&ignore_preferences=1&supportedlang=portuguese&snr=1_7_7_2300_7&specials=1&infinite=1")
    
    content_type = response.headers.get('Content-Type')
    app_id_pattern = re.compile(r'/app/(\d+)')
    
    if "html" in content_type:
        soup = BeautifulSoup(response.content, "html.parser")
        promo_games_with_app = [promo for promo in soup.findAll("a", href=True) if "app" in promo["href"]]
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
