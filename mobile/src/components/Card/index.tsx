import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Heart} from 'react-native-feather';
import {authConfig} from '../../config/auth-config';
import colors from '../../global/colors';
import PromotionPrice from '../PromotionPrice';
import {
  ButtonContainer,
  Container,
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
  mb,
  mt,
  onCardPress,
}) => {
  const {isLoggedIn} = authConfig;
  return (
    <Container mb={mb} mt={mt}>
      {isLoggedIn() && (
        <TouchableOpacity
          activeOpacity={0.8}
          style={{position: 'absolute', right: 0, top: 5}}>
          <Heart
            width={32}
            height={32}
            stroke={colors.primaryButton}
            fill={favourite ? colors.primaryButton : 'transparent'}
          />
        </TouchableOpacity>
      )}
      <ButtonContainer activeOpacity={0.8} onPress={onCardPress}>
        <StyledImage source={{uri}} />
        <TextContainer>
          <Title>{title}</Title>
          <PromotionPrice
            discountedPrice={discountedPrice}
            oldPrice={oldPrice}
          />
        </TextContainer>
      </ButtonContainer>
    </Container>
  );
};
