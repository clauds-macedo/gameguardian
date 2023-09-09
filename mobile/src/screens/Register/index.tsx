import React from 'react';
import Input from '../../components/Input';
import MainButton from '../../components/MainButton';
import Label from '../../components/PageTitle/components/Label';
import useFormValidation from '../../hooks/useFormValidation';
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
  const {values, setValues, errors, validate} = useFormValidation();

  const handleSubmit = () => {
    if (validate()) {
      //chamar afunção do firebase aq
    }
  };

  return (
    <Container>
      <Circles sideX="left" sideY="top" />
      <Circles style={{bottom: 40, right: 0}} />
      <ImageBackground source={require('./assets/dante.png')} blurRadius={1} />
      <FormContainer>
        <Label title>{languageStrings.signUp}</Label>
        <Input
          placeholder="Usuário"
          mt={16}
          value={values.username}
          onChangeText={text => setValues(prev => ({...prev, username: text}))}
        />
        {errors.username && <Label error>{errors.username}</Label>}

        <Input
          placeholder="E-mail"
          value={values.email}
          onChangeText={text => setValues(prev => ({...prev, email: text}))}
        />
        {errors.email && <Label error>{errors.email}</Label>}

        <Input
          placeholder="Password"
          value={values.password}
          onChangeText={text => setValues(prev => ({...prev, password: text}))}
        />
        {errors.password && <Label error>{errors.password}</Label>}

        <Input
          placeholder="Confirm password"
          value={values.confirmPassword}
          onChangeText={text =>
            setValues(prev => ({...prev, confirmPassword: text}))
          }
        />
        {errors.confirmPassword && (
          <Label error>{errors.confirmPassword}</Label>
        )}
      </FormContainer>
      <ButtonContainer>
        <MainButton
          variant="primary"
          label={languageStrings.signIn}
          onPressButton={handleSubmit}
        />
      </ButtonContainer>
    </Container>
  );
};

export default Register;
