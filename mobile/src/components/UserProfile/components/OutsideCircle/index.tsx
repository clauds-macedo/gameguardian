import React from 'react';
import {Circle} from './styles';

const OutsideCircle = ({children}: IOutsideCircle) => {
  return <Circle>{children}</Circle>;
};

export default OutsideCircle;
