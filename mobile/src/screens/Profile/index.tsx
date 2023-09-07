import React from 'react';
import GeneralScreenContainer from '../../components/GeneralScreenContainer';
import MainButton from '../../components/MainButton';
import OptionConfig from '../../components/OptionConfig';
import PageTitle from '../../components/PageTitle';
import UserProfile from '../../components/UserProfile';
import useLanguage from '../../hooks/useLanguage';
import {options} from './utils';
import {authConfig} from '../../config/auth-config';

const Profile: React.FC = () => {
  const {languageStrings} = useLanguage();
  const {isLoggedIn} = authConfig;
  return (
    <GeneralScreenContainer>
      <PageTitle
        title={languageStrings.settings}
        subtitle={languageStrings.hello}
      />
      <UserProfile />
      {options.map(({icon, name}) => (
        <OptionConfig
          key={name}
          icon={icon}
          name={name}
          navigateScreen={name[0].toUpperCase() + name.substring(1)}
        />
      ))}
      <MainButton
        variant='primary'
        label={isLoggedIn() ? languageStrings.signOut : languageStrings.signIn}
        style={{position: 'absolute', bottom: 16}}
      />
    </GeneralScreenContainer>
  );
};

export default Profile;
