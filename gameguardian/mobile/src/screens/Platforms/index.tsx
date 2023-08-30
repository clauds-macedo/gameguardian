import React from 'react';
import Carousel from './components/Carousel';
import {Container} from './styles';
import {data} from './utils';

export const Platforms: React.FC = () => {
  return (
    <Container>
      <Carousel data={data} />
    </Container>
  );
};
