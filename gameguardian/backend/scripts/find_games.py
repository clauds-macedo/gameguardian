def safe_extract(element, config_key, config):
    found = element.find(config[config_key]['html_element'], {'class': config[config_key]['class']})
    return found.text if found else ""

def safe_extract_img(element, config_key, config):
    found = element.find(config[config_key]['html_element'], config[config_key]['attrs'])
    if found:
        srcset = found.get('srcset')
        if srcset:
            # Vamos procurar a imagem 2x
            images = [img.strip() for img in srcset.split(',')]
            for image in images:
                if '2x' in image:
                    return image.split(' ')[0]  # Retorna a URL da imagem 2x
        return found.get('src')
    return ""


def find_games(discount_games, config):
    all_games_discounted = []
    for game in discount_games:
        game_info = {}
        # Extracting Title
        game_info['title'] = safe_extract(game, 'title', config)

        # Extracting Discount Original Price
        game_info['discount_original_price'] = safe_extract(game, 'discount_original_price', config)

        # Extracting Discount Percentage
        game_info['discount_pct'] = safe_extract(game, 'discount_pct', config)

        # Extracting Discount Final Price
        game_info['discount_final_price'] = safe_extract(game, 'discount_final_price', config)

        # Extracting href 
        game_info['link'] = game['href']

        # You can also add extraction for img, for example:
        game_info['image_src'] = safe_extract_img(game, 'img', config)

        all_games_discounted.append(game_info)

    return all_games_discounted
