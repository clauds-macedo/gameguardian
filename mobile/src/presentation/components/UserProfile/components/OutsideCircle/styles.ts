import colors from '@infra/global/colors';
import { Circle as SVGCircle } from 'react-native-svg';
import styled from 'styled-components/native';

export const SvgContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Circle = styled(SVGCircle).attrs({
  cx: '95',
  cy: '95',
  r: '92',
  strokeWidth: '1',
  stroke: colors.primaryButton,
  fill: 'transparent',
})``;
