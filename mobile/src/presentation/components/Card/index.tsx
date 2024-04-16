import React from 'react';
import {
  ButtonContainer,
  Container,
  DiscountedPrice,
  OldPrice,
  StyledImage,
  TextContainer,
  Title,
} from './styles';
import { CardProps } from './types';
import useLanguage from '../../hooks/useLanguage';

export const Card: React.FC<CardProps> = ({
  discountedPrice,
  originalPrice,
  title,
  link,
  mb,
  mt,
  onCardPress,
}) => {
  const { language } = useLanguage();
  const currency = language === 'en' ? '$' : 'R$';
  return (
    <Container mb={mb} mt={mt}>
      <ButtonContainer activeOpacity={0.8} onPress={onCardPress}>
        <StyledImage source={{ uri: link }} />
        <TextContainer>
          <Title>{title}</Title>
          <OldPrice>{`${currency} ${originalPrice}`}</OldPrice>
          <DiscountedPrice>{`${currency} ${discountedPrice}`}</DiscountedPrice>
        </TextContainer>
      </ButtonContainer>
    </Container>
  );
};