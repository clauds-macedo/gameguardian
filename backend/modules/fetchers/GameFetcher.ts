export interface GameResponse {
  title: string;
  description: string;
  thumbnail: string;
  developers: string[];
  publishers: string[];
  originalPrice: string;
  discountedPrice: string | undefined;
  discountPercent: string | undefined;
  link: string;
}

export interface GameFetcher {
  getFreeGames: () => Promise<GameResponse[]>;
  getGamesInPromotion: () => Promise<GameResponse[]>;
  getPromotionsByDeveloper: (developer: string) => Promise<GameResponse[]>
}

