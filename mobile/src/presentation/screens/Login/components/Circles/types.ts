import type { SvgProps } from 'react-native-svg';

export type ICircleProps = {
  sideX?: 'left' | 'right';
  sideY?: 'bottom' | 'top';
} & SvgProps;
