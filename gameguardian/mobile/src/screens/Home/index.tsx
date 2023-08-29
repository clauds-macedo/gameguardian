import React from 'react';
import PageTitle from '../../components/PageTitle';
import useLanguage from '../../hooks/useLanguage';
import {TopTabNavigation} from '../../routes/TopNavigation';
import {Container} from './styles';

const Home: React.FC = () => {
  const {languageStrings} = useLanguage();
  return (
    <Container>
      <PageTitle
        title={languageStrings.everything}
        subtitle={languageStrings.explore}
      />
      <TopTabNavigation />
    </Container>
  );
};

export default Home;
