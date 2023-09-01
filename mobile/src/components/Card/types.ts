export interface CardProps {
  uri: string;
  title: string;
  oldPrice: string;
  discountedPrice: string;
  favourite: boolean;
  onCardPress?: () => void;
  mb?: number;
  mt?: number;
}
