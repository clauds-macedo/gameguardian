import styled from 'styled-components/native';
import colors from '../../global/colors';
import fonts from '../../global/fonts';
import styles from '../../global/styles';

export const Container = styled.View`
  flex-direction: row;
  border-radius: 5px;
  align-items: center;
  width: ${styles.screenFullWidth - styles.defaultApplicationPadding}px;
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
