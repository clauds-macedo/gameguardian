import React from 'react';
import {IContainer} from './interface';
import {Container} from './styles';

const TabContainer: React.FC<IContainer> = ({children}) => {
  return <Container>{children}</Container>;
};

export default TabContainer;
