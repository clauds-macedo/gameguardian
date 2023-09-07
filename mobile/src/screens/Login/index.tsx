import React from 'react';
import Input from '../../components/Input';
import Label from '../../components/PageTitle/components/Label';
import {Circles} from './components/Circles';
import {
  ButtonContainer,
  ButtonText,
  Container,
  FormContainer,
  ImageBackground,
  StyledButton,
} from './styles';
const Login: React.FC = () => {
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
        <StyledButton>
          <ButtonText>Entrar</ButtonText>
        </StyledButton>
        <StyledButton>
          <ButtonText>Registro</ButtonText>
        </StyledButton>
      </ButtonContainer>
    </Container>
  );
};

export default Login;
