def find_games(discount_games, config):
    all_games_discounted = []
    
    for game in discount_games:
        game_info = {}

        title = game.find(config['title']['html_element'], {'class': config['title']['class']}).text
        game_info['title'] = title

        discount_original_price = game.find(config['discount_original_price']['html_element'], {'class': config['discount_original_price']['class']}).text
        game_info['discount_original_price'] = discount_original_price

        discount_pct = game.find(config['discount_pct']['html_element'], {'class': config['discount_pct']['class']}).text
        game_info['discount_pct'] = discount_pct

        discount_final_price = game.find(config['discount_final_price']['html_element'], {'class': config['discount_final_price']['class']}).text
        game_info['discount_final_price'] = discount_final_price

        all_games_discounted.append(game_info)

    return all_games_discounted
