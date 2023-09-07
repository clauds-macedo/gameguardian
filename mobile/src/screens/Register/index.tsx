import React from 'react';
import Input from '../../components/Input';
import MainButton from '../../components/MainButton';
import Label from '../../components/PageTitle/components/Label';
import useLanguage from '../../hooks/useLanguage';
import {Circles} from '../Login/components/Circles';
import {
  ButtonContainer,
  Container,
  FormContainer,
  ImageBackground,
} from '../Login/styles';

const Register: React.FC = () => {
  const {languageStrings} = useLanguage();
  return (
    <Container>
      <Circles sideX="left" sideY="top" />
      <Circles style={{bottom: 40, right: 0}} />
      <ImageBackground source={require('./assets/dante.png')} blurRadius={1} />
      <FormContainer>
        <Label title>{languageStrings.signUp}</Label>
        <Input placeholder="E-mail" mt={16} />
        <Input placeholder="Password" />
        <Input placeholder="Confirm password" />
      </FormContainer>
      <ButtonContainer>
        <MainButton variant="primary" label={languageStrings.signIn} />
      </ButtonContainer>
    </Container>
  );
};

export default Register;
