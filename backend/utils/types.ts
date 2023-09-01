export type AnyObject = {
  [key: string]: any;
};

export interface ISafeObject {
  obj: AnyObject;
  key: string;
  config: AnyObject;
}

export interface IGameInfo {
  title: string;
  discount_original_price: number;
  discount_pct: string;
  discount_final_price: number;
  link: string;
  image_src: string;
}
