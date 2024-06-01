import React from 'react';
import { Container } from './styles';
import type { IContainerProps } from './types';

const GeneralScreenContainer = ({ children }: IContainerProps) => <Container>{children}</Container>;

export default GeneralScreenContainer;
