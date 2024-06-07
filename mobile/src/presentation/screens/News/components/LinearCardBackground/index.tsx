import React from 'react';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';
import { CardButtonContainer, Content } from './styles';
import type { ILinearProps } from './types';

const LinearCardBackground = ({ onPress, children }: ILinearProps) => (
    <CardButtonContainer onPress={onPress}>
      <Svg height={160} width="100%">
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor="#1C1F23" stopOpacity="0.6" />
            <Stop offset="1" stopColor="#16191D" stopOpacity="1" />
          </LinearGradient>
        </Defs>
        <Rect
          x="0"
          y="0"
          rx={23}
          ry={23}
          width="100%"
          height={160}
          fill="url(#grad)"
        />
      </Svg>
      <Content>{children}</Content>
    </CardButtonContainer>
  );

export default LinearCardBackground;
