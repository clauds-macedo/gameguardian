import React from 'react';
import { Label } from './styles';
import { ILabel } from './types';

const TopBarLabel: React.FC<ILabel> = ({ children, isFocused }) => {
  return <Label isFocused={isFocused}>{children}</Label>;
};

export default TopBarLabel;
