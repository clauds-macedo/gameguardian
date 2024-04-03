import { styled } from 'styled-components/native';
import colors from '../../../../global/colors';
import fonts from '../../../../global/fonts';
import { ILabel } from './types';

export const Label = styled.Text<Pick<ILabel, 'isFocused'>>`
  font-family: ${fonts.regular};
  font-size: 14px;
  color: ${({ isFocused }) =>
    isFocused ? colors.primaryText : colors.secondaryText};
`;
