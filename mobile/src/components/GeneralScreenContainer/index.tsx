import React from 'react';
import {Container} from './styles';
import type {IContainerProps} from './types';

const GeneralScreenContainer = ({children}: IContainerProps) => {
  return <Container>{children}</Container>;
};

export default GeneralScreenContainer;
