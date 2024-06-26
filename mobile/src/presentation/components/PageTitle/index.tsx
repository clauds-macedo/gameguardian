import React from 'react';
import Label from './components/Label';
import { Container } from './styles';
import type { IPageTitle } from './types';

const PageTitle: React.FC<IPageTitle> = ({ title = '', subtitle = '' }) => (
  <Container>
    {subtitle && <Label>{subtitle}</Label>}
    <Label title>{title}</Label>
  </Container>
);

export default PageTitle;
