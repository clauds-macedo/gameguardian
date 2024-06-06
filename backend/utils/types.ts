export type AnyObject = {
  [key: string]: any;
};

export interface ISafeObject {
  obj: AnyObject;
  key: string;
  config: AnyObject;
}

interface platforms {
  windows: boolean,
  macOs: boolean,
  linux: boolean,
}

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
  genres: string[];
  platforms: platforms,
  releaseDate: string,
};

export interface IGameInfo {
  title: string;
  discount_original_price: number;
  discount_pct: string;
  discount_final_price: number;
  link: string;
  image_src: string;
}
