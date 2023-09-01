steam_config = {
    "url": "https://store.steampowered.com/search/results/?query&start=",
    "pagination": {
        "base_url": "https://store.steampowered.com/search/results/?query",
        "start_param": "start",
        "count_param": "count",
        "page_size": 50,
    },
    "class": {"name": "a", "attrs": {"class": "search_result_row"}},
    "img": {"html_element": "img", "attrs": {}},
    "title": {"class": "title", "html_element": "span"},
    "discount_original_price": {
        "class": "discount_original_price",
        "html_element": "div",
    },
    "discount_pct": {"class": "discount_pct", "html_element": "div"},
    "discount_final_price": {"class": "discount_final_price", "html_element": "div"},
}

platforms = {"steam": steam_config}
