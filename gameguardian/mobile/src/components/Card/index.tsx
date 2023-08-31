import React from 'react';
import {Heart} from 'react-native-feather';
import colors from '../../global/colors';
import useLanguage from '../../hooks/useLanguage';
import {
  Container,
  DiscountedPrice,
  OldPrice,
  StyledImage,
  TextContainer,
  Title,
} from './styles';
import {CardProps} from './types';

export const Card: React.FC<CardProps> = ({
  discountedPrice,
  oldPrice,
  title,
  uri,
  favourite,
}) => {
  const {language} = useLanguage();
  const currency = language === 'en' ? '$' : 'R$';
  return (
    <Container>
      <StyledImage source={{uri}} />
      <Heart
        width={32}
        height={32}
        style={{position: 'absolute', right: 0, top: 5}}
        stroke={colors.primaryButton}
        fill={favourite ? colors.primaryButton : 'transparent'}
      />
      <TextContainer>
        <Title>{title}</Title>
        <OldPrice>{currency + ' ' + oldPrice}</OldPrice>
        <DiscountedPrice>{currency + ' ' + discountedPrice}</DiscountedPrice>
      </TextContainer>
    </Container>
  );
};
