import React from 'react';
import GeneralScreenContainer from '../../components/GeneralScreenContainer';
import PageTitle from '../../components/PageTitle';
import useLanguage from '../../hooks/useLanguage';

const Favourites: React.FC = () => {
  const {languageStrings} = useLanguage();
  return (
    <GeneralScreenContainer>
      <PageTitle title={languageStrings.favourites} />
    </GeneralScreenContainer>
  );
};

export default Favourites;
