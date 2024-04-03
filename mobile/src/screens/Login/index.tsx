/* eslint-disable global-require */
import React, { useState } from 'react';
import Input from '../../components/Input';
import MainButton from '../../components/MainButton';
import Label from '../../components/PageTitle/components/Label';
import { authenticationUseCase } from '../../data/usecases/authenticationUseCase';
import useLanguage from '../../hooks/useLanguage';
import useAppRoute from '../../routes/hooks/useAppRoute';
import { Circles } from './components/Circles';
import {
  ButtonContainer,
  Container,
  FormContainer,
  ImageBackground,
} from './styles';

const Login: React.FC = () => {
  // Hooks
  const { languageStrings } = useLanguage();
  const { navigate } = useAppRoute().navigation;

  // States
  const [login, setLogin] = useState({ email: '', password: '' });

  // Event handlers
  const handleEmailChange = (email: string) => {
    setLogin((prev) => ({ ...prev, email }));
  };

  const handlePasswordChange = (password: string) => {
    setLogin((prev) => ({ ...prev, password }));
  };

  // Render
  return (
    <Container>
      <Circles sideX="left" sideY="top" />
      <Circles style={{ bottom: 40, right: 0 }} />
      <ImageBackground source={require('./assets/ellie.jpg')} blurRadius={1} />
      <FormContainer>
        <Label title>Login</Label>
        <Input placeholder="E-mail" mt={16} onChangeText={handleEmailChange} />
        <Input
          placeholder="Password"
          onChangeText={handlePasswordChange}
          secureTextEntry
        />
      </FormContainer>
      <ButtonContainer>
        <MainButton
          variant="tertiary"
          mb={16}
          label={languageStrings.registerCtaLabel}
          onPressButton={() => navigate('Register')}
        />
        <MainButton
          variant="primary"
          label={languageStrings.signIn}
          onPressButton={async () => {
            try {
              await authenticationUseCase.login({
                email: login.email,
                password: login.password,
              });
              navigate('Home');
            } catch (e) {
              console.warn(e);
            }
          }}
        />
      </ButtonContainer>
    </Container>
  );
};

export default Login;
