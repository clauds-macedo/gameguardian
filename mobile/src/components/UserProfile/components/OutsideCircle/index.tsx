import React from 'react';
import Svg from 'react-native-svg';
import { Circle, SvgContainer } from './styles';

const OutsideCircle = ({ children }: IOutsideCircle) => {
  return (
    <SvgContainer>
      <Svg width="190" height="190" viewBox="0 0 190 190">
        <Circle />
      </Svg>
      {children}
    </SvgContainer>
  );
};
export default OutsideCircle;
