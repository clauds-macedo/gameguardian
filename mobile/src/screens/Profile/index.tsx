import React from 'react';
import GeneralScreenContainer from '../../components/GeneralScreenContainer';
import MainButton from '../../components/MainButton';
import OptionConfig from '../../components/OptionConfig';
import PageTitle from '../../components/PageTitle';
import UserProfile from '../../components/UserProfile';
import useLanguage from '../../hooks/useLanguage';
import {options} from './utils';

const Profile: React.FC = () => {
  const {languageStrings} = useLanguage();
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
      <MainButton />
    </GeneralScreenContainer>
  );
};

export default Profile;
