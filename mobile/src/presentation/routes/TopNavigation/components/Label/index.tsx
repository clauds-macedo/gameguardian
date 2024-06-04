import React from 'react';
import { Label } from './styles';
import type { ILabel } from './types';

const TopBarLabel: React.FC<ILabel> = ({ children, isFocused }) => (
  <Label isFocused={isFocused}>{children}</Label>
);

export default TopBarLabel;
