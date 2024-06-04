import colors from '@infra/global/colors';
import fonts from '@infra/global/fonts';
import { styled } from 'styled-components/native';
import type { ILabel } from './types';

export const Label = styled.Text<Pick<ILabel, 'isFocused'>>`
  font-family: ${fonts.regular};
  font-size: 14px;
  color: ${({ isFocused }) =>
    isFocused ? colors.primaryText : colors.secondaryText};
`;
