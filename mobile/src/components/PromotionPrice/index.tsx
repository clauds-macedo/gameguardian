import useLanguage from '../../hooks/useLanguage';
import {DiscountedPrice, OldPrice} from './styles';

interface IPromotionPriceProps {
  oldPrice: string;
  discountedPrice: string;
}

const PromotionPrice = ({oldPrice, discountedPrice}: IPromotionPriceProps) => {
  const {language} = useLanguage();
  const currency = language === 'en' ? '$' : 'R$';
  return (
    <>
      <OldPrice>{currency + ' ' + oldPrice}</OldPrice>
      <DiscountedPrice>{currency + ' ' + discountedPrice}</DiscountedPrice>
    </>
  );
};
export default PromotionPrice;
