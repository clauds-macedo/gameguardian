import React from 'react';
import {
  ButtonContainer,
  ButtonText,
  Container,
  FormContainer,
  ImageBackground,
  StyledButton,
} from './styles';
import {Dimensions} from 'react-native';
import {Circles} from './components/Circles';
import Label from '../../components/PageTitle/components/Label';
import Input from '../../components/Input';
const Login: React.FC = () => {
  return (
    <Container>
      <Circles style={{top: 0, position: 'absolute', opacity: 0.5}} />
      <ImageBackground
        source={require('./assets/ellie.jpg')}
        style={{
          opacity: 0.09,
          backgroundColor: 'rgba(0,0,0,0.5)',
          position: 'absolute',
          height: Dimensions.get('screen').height,
        }}
        blurRadius={1}
      />
      <FormContainer>
        <Label title>Login</Label>
        <Input placeholder='E-mail' mt={16}/>
        <Input placeholder='Password'/>
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
