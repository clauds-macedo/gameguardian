function safeExtract(obj, key, config) {
  return obj[key] ? obj[key] : config[key];
}

function safeExtractImage(obj, key, config) {
  return obj[key] ? obj[key].url : config[key];
}

const buildEpicGamesURL = (queryParams) => {
  const urlParams = {
    allowCountries: "BR",
    category: "games%2Fedition%2Fbase",
    count: 400,
    country: "BR",
    effectiveDate: "[,2023-08-28T11:14:36.072Z]",
    keywords: "",
    locale: "pt-BR",
    onSale: true,
    sortBy: "releaseDate",
    sortDir: "DESC",
    start: 0,
    tag: "",
    withPrice: true,
    comingSoon: false,
  };

  const baseUrl = "https://store.epicgames.com/graphql";
  const operationName = "searchStoreQuery";
  const variables = JSON.stringify(urlParams);
  const extensions = JSON.stringify({
    persistedQuery: {
      version: 1,
      sha256Hash:
        "7d58e12d9dd8cb14c84a3ff18d360bf9f0caa96bf218f2c5fda68ba88d68a437",
    },
  });

  const url = `${baseUrl}?operationName=${operationName}&variables=${variables}&extensions=${extensions}`;
  console.log(variables);
  return url;
};
  

const getDiscountedGamesData = (games) => {
  const all_games_discounted = [];

  for (const game of games) {
    const discountAmount = game.price.totalPrice.originalPrice - game.price.totalPrice.discountPrice;
    const discountPercentage = Math.floor(discountAmount / game.price.totalPrice.originalPrice * 100);

    const game_info = {
      title: game.title,
      discount_original_price: game.price.totalPrice.originalPrice / 100,
      discount_pct: discountPercentage + "%",
      discount_final_price: game.price.totalPrice.discountPrice / 100,
      link: game.urlSlug
        ? `https://www.epicgames.com/store/pt-BR/p/${game.urlSlug}`
        : "#",
      image_src: game.keyImages.find(
        (img) => img.type === "OfferImageWide" || img.type === "OfferImageTall"
      ).url,
    };

    all_games_discounted.push(game_info);
  }

  return all_games_discounted;
};

module.exports = {
  safeExtract,
  safeExtractImage,
  getDiscountedGamesData,
  buildEpicGamesURL,
};
