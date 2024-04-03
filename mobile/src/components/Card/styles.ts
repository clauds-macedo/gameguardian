import styled from 'styled-components/native';
import colors from '../../global/colors';
import fonts from '../../global/fonts';
import { CardProps } from './types';

export const Container = styled.View<Pick<CardProps, 'mb' | 'mt'>>`
  flex-direction: row;
  border-radius: 5px;
  align-items: center;
  margin: ${({ mb, mt }) => `${mt ?? 0}px 0 ${mb ?? 0}px 0`};
`;

export const ButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  width: 90%;
`;

export const StyledImage = styled.Image`
  width: 98px;
  height: 98px;
  border-radius: 30px;
  margin-right: 15px;
`;

export const TextContainer = styled.View`
  flex-direction: column;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${fonts.bold};
  color: ${colors.primaryText};
  width: 80%;
  margin-bottom: 8px;
`;

export const OldPrice = styled.Text`
  font-size: 14px;
  text-decoration-line: line-through;
  color: ${colors.secondaryText};
`;

export const DiscountedPrice = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.terciaryText};
`;
