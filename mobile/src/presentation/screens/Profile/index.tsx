import { authConfig } from '@/infra/config/auth-config';
import React from 'react';
import useLanguage from '../../../presentation/hooks/useLanguage';
import GeneralScreenContainer from '../../components/GeneralScreenContainer';
import MainButton from '../../components/MainButton';
import OptionConfig from '../../components/OptionConfig';
import PageTitle from '../../components/PageTitle';
import UserProfile from '../../components/UserProfile';
import useAppRoute from '../../routes/hooks/useAppRoute';
import { options } from './utils';

const Profile: React.FC = () => {
  const { languageStrings } = useLanguage();
  const { isLoggedIn, signOut } = authConfig;
  const { navigate } = useAppRoute().navigation;
  return (
    <GeneralScreenContainer>
      <PageTitle
        title={languageStrings.settings}
        subtitle={languageStrings.hello}
      />
      <UserProfile />
      {options.map(({ icon, name }) => (
        <OptionConfig
          key={name}
          icon={icon}
          name={name}
          navigateScreen={name[0].toUpperCase() + name.substring(1)}
        />
      ))}
      <MainButton
        variant={isLoggedIn() ? 'secondary' : 'primary'}
        label={isLoggedIn() ? languageStrings.signOut : languageStrings.signIn}
        style={{ position: 'absolute', bottom: 16 }}
        onPressButton={() => {
          if (isLoggedIn()) {
            signOut();
          } else {
            navigate('Login');
          }
        }}
      />
    </GeneralScreenContainer>
  );
};

export default Profile;
