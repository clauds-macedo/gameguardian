import React from 'react';
import { Label } from './styles';
import type { ILabel } from './types';

const NewsCardLabel = ({ children }: ILabel) => <Label>{children}</Label>;

export default NewsCardLabel;
