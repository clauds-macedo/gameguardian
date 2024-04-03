import React from 'react';
import Label from './components/Label';
import { Container } from './styles';
import { IPageTitle } from './types';

const PageTitle: React.FC<IPageTitle> = ({ title = '', subtitle = '' }) => {
  return (
    <Container>
      {subtitle && <Label>{subtitle}</Label>}
      <Label title>{title}</Label>
    </Container>
  );
};

export default PageTitle;
