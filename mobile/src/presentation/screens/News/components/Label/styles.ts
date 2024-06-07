import colors from '@infra/global/colors';
import fonts from '@infra/global/fonts';
import styled from 'styled-components/native';

export const Label = styled.Text`
  font-size: 14px;
  font-family: ${fonts.bold};
  color: ${colors.primaryText};
  flex: 1;
`;
