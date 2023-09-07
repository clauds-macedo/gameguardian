import React from 'react';
import {SErrorLabel, SLabel} from './styles';
import type {ILabel} from './types';

const Label: React.FC<ILabel> = ({children, title = false, error = false}) => {
  if (error) {
    return <SErrorLabel>{children}</SErrorLabel>;
  }
  return <SLabel title={title}>{children}</SLabel>;
};

export default Label;
