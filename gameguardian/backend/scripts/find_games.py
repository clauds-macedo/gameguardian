def find_games(discount_games):
    all_games_discounted = []
    for game in discount_games:
        game_info = {}

        title = game.find('span', {'class': 'title'}).text
        game_info['title'] = title

        discount_original_price = game.find('div', {'class': 'discount_original_price'}).text
        game_info['discount_original_price'] = discount_original_price

        discount_pct = game.find('div', {'class': 'discount_pct'}).text
        game_info['discount_pct'] = discount_pct

        discount_final_price = game.find('div', {'class': 'discount_final_price'}).text
        game_info['discount_final_price'] = discount_final_price

        all_games_discounted.append(game_info)

    return all_games_discounted
