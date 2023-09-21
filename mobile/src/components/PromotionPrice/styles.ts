import styled from 'styled-components/native';
import colors from '../../global/colors';

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
