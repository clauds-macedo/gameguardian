import React from 'react';
import Input from '../../components/Input';
import MainButton from '../../components/MainButton';
import Label from '../../components/PageTitle/components/Label';
import useLanguage from '../../hooks/useLanguage';
import useAppRoute from '../../routes/hooks/useAppRoute';
import {Circles} from './components/Circles';
import {
  ButtonContainer,
  Container,
  FormContainer,
  ImageBackground,
} from './styles';
const Login: React.FC = () => {
  const {languageStrings} = useLanguage();
  const {navigate} = useAppRoute().navigation;
  return (
    <Container>
      <Circles sideX="left" sideY="top" />
      <Circles style={{bottom: 40, right: 0}} />
      <ImageBackground source={require('./assets/ellie.jpg')} blurRadius={1} />
      <FormContainer>
        <Label title>Login</Label>
        <Input placeholder="E-mail" mt={16} />
        <Input placeholder="Password" />
      </FormContainer>
      <ButtonContainer>
        <MainButton
          variant="tertiary"
          mb={16}
          label={languageStrings.registerCtaLabel}
          onPressButton={() => navigate('Register')}
        />
        <MainButton variant="primary" label={languageStrings.signIn} />
      </ButtonContainer>
    </Container>
  );
};

export default Login;
