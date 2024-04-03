import { styled } from 'styled-components/native';
import { getBackgroundColor } from './utils';
import { IMainButton } from './types';
import colors from '../../global/colors';
import fonts from '../../global/fonts';

export const StyledButton = styled.TouchableOpacity<IMainButton>`
  height: 57px;
  background-color: ${getBackgroundColor};
  margin: ${({ mb, mt }) => `${mt ?? 0}px 0 ${mb ?? 0}px 0`};
  width: 100%;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: ${colors.primaryText};
  font-family: ${fonts.bold};
`;
