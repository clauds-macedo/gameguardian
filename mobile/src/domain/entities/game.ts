export interface Game {
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
