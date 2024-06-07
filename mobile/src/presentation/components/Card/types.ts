export interface CardProps {
  link: string;
  title: string;
  originalPrice: string;
  discountedPrice: string;
  onCardPress?: () => void;
  mb?: number;
  mt?: number;
}
