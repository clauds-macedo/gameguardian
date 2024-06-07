/* eslint-disable global-require */
import { authenticationUseCase } from '@/data/usecases/authenticationUseCase';
import useAppRoute from '@/presentation/routes/hooks/useAppRoute';
import React, { useState } from 'react';
import useLanguage from '../../../presentation/hooks/useLanguage';
import Input from '../../components/Input';
import MainButton from '../../components/MainButton';
import Label from '../../components/PageTitle/components/Label';
import { Circles } from '../Login/components/Circles';
import {
  ButtonContainer,
  Container,
  FormContainer,
  ImageBackground,
} from '../Login/styles';
import { INITIAL_STATE, hasErrors, validate } from './utils';

const Register: React.FC = () => {
  const { languageStrings } = useLanguage();
  const [values, setValues] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState(INITIAL_STATE);
  const {navigate} = useAppRoute().navigation;

  const handleInputChange = (field: string, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    const newErrors = validate('pt', values);
    console.log(newErrors, 'errors')
    setErrors(newErrors);
    
    if (hasErrors(newErrors)) {
      return;
    }

    try {
      await authenticationUseCase.register({
        email: values.email ?? "",
        confirmPassword: values.confirmPassword ?? "",
        name: values.username ?? "",
        password: values.password ?? "",
      });
      setValues(INITIAL_STATE);
      navigate('Home');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <Circles sideX="left" sideY="top" />
      <Circles style={{ bottom: 40, right: 0 }} />
      <ImageBackground source={require('./assets/dante.png')} blurRadius={1} />
      <FormContainer>
        <Label title>{languageStrings.signUp}</Label>
        <Input
          placeholder="Usuário"
          mt={16}
          value={values.username}
          onChangeText={(text) => handleInputChange('username', text)}
        />
        {errors.username && <Label error>{errors.username}</Label>}

        <Input
          placeholder="E-mail"
          value={values.email}
          onChangeText={(text) => handleInputChange('email', text)}
        />
        {errors.email && <Label error>{errors.email}</Label>}

        <Input
          placeholder="Password"
          value={values.password}
          onChangeText={(text) => handleInputChange('password', text)}
        />
        {errors.password && <Label error>{errors.password}</Label>}

        <Input
          placeholder="Confirm password"
          value={values.confirmPassword}
          onChangeText={(text) => handleInputChange('confirmPassword', text)}
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