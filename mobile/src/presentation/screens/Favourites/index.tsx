import React from 'react';
import GeneralScreenContainer from '../../components/GeneralScreenContainer';
import useLanguage from '../../../presentation/hooks/useLanguage';
import PageTitle from '../../components/PageTitle';

const Favourites: React.FC = () => {
  const { languageStrings } = useLanguage();
  return (
    <GeneralScreenContainer>
      <PageTitle title={languageStrings.favourites} />
    </GeneralScreenContainer>
  );
};

export default Favourites;
