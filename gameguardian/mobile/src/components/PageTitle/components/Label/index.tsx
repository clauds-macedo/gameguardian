import React from 'react';
import {SLabel} from './styles';
import type {ILabel} from './types';

const Label: React.FC<ILabel> = ({children, title = false}) => {
  return <SLabel title={title}>{children}</SLabel>;
};

export default Label;
