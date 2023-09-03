import {styled} from 'styled-components/native';
import colors from '../../../../global/colors';

export const Circle = styled.View`
  width: 190px;
  height: 190px;
  border-radius: 380px;
  border-width: 1px;
  align-items: center;
  justify-content: center;
  border-color: ${colors.primaryButton};
`;
