import React from 'react';
import GeneralScreenContainer from '../../components/GeneralScreenContainer';
import PageTitle from '../../components/PageTitle';
import UserProfile from '../../components/UserProfile';
import useLanguage from '../../hooks/useLanguage';

const Profile: React.FC = () => {
  const {languageStrings} = useLanguage();
  return (
    <GeneralScreenContainer>
      <PageTitle
        title={languageStrings.settings}
        subtitle={languageStrings.hello}
      />
      <UserProfile />
    </GeneralScreenContainer>
  );
};

export default Profile;
