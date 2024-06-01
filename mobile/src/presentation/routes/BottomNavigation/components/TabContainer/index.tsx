import React from 'react';
import { IContainer } from './interface';
import { Container } from './styles';

const TabContainer: React.FC<IContainer> = ({
  children,
  variant = 'bottom',
}) => {
  return <Container variant={variant}>{children}</Container>;
};

export default TabContainer;
