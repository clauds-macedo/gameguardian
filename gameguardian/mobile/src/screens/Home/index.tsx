import React from 'react';
import PageTitle from '../../components/PageTitle';
import {Container} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <PageTitle title="Tudo" subtitle="Explorar" />
    </Container>
  );
};

export default Home;
