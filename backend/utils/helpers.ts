import type { IGameInfo, ISafeObject } from "./types";

export function safeExtract({ config, key, obj }: ISafeObject) {
  return obj[key] ? obj[key] : config[key];
}

export function safeExtractImage({ config, key, obj }: ISafeObject) {
  return obj[key] ? obj[key].url : config[key];
}

export const buildEpicGamesURL = () => {
  const urlParams = {
    allowCountries: "BR",
    category: "games%2Fedition%2Fbase",
    count: 400,
    country: "BR",
    effectiveDate: `[,${new Date().toISOString()}]`,
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
  return url;
};
  

export const getDiscountedGamesData = (games: any) => {
  const all_games_discounted: IGameInfo[] = [];

  for (const game of games) {
    const discountAmount = game.price.totalPrice.originalPrice - game.price.totalPrice.discountPrice;
    const discountPercentage = Math.floor(discountAmount / game.price.totalPrice.originalPrice * 100);

    const game_info = {
      title: game.title,
      discount_original_price: game.price.totalPrice.originalPrice / 100,
      discount_pct: discountPercentage + "%",
      discount_final_price: game.price.totalPrice.discountPrice / 100,
      link: `https://www.epicgames.chttps://store.epicgames.com/pt-BR/browse?q=${game.title}&sortBy=relevancy&sortDir=DESC&count=40om`,
      image_src: game.keyImages.find(
        (img: any) => img.type === "OfferImageWide" || img.type === "OfferImageTall"
      ).url,
    };

    all_games_discounted.push(game_info);
  }

  return all_games_discounted;
};
