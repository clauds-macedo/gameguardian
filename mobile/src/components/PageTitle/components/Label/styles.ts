import styled from 'styled-components/native';
import colors from '../../../../global/colors';
import fonts from '../../../../global/fonts';
import {ILabel} from './types';

export const SLabel = styled.Text<Pick<ILabel, 'title'>>`
  font-size: ${({title}) => (title ? 28 : 14)}px;
  color: ${({title}) => (title ? colors.primaryText : colors.secondaryText)};
  font-family: ${({title}) => (title ? fonts.bold : fonts.regular)};
`;

export const SErrorLabel = styled.Text`
  color: ${colors.secondaryButton};
  font-family: ${fonts.bold};
`;
