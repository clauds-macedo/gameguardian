def safe_extract(element, config_key, config):
    """Safely extract the attribute defined by config_key from element."""
    found = element.find(config[config_key]['html_element'], {'class': config[config_key]['class']})
    return found.text if found else None

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

        all_games_discounted.append(game_info)

    return all_games_discounted
