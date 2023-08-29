import React from 'react';
import PageTitle from '../../components/PageTitle';
import {TopTabNavigation} from '../../routes/TopNavigation';
import {Container} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <PageTitle title="Tudo" subtitle="Explorar" />
      <TopTabNavigation />
    </Container>
  );
};

export default Home;
