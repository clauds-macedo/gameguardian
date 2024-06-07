export interface CardProps {
  thumbnail: string;
  title: string;
  originalPrice: string;
  discountedPrice: string;
  onCardPress?: () => void;
  mb?: number;
  mt?: number;
}
