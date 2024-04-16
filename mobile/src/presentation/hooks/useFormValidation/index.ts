import { useState } from 'react';
import useAppRoute from '../../routes/hooks/useAppRoute';
import { authConfig } from '../../../infra/config/auth-config';
import { realtimeConfig } from '../../../infra/config/database-config';
import { authenticationUseCase } from '../../../data/usecases/authenticationUseCase';

const INITIAL_STATE = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const useFormValidation = () => {
  const { signUp } = authConfig;
  const { set } = realtimeConfig;
  
  const { navigate } = useAppRoute().navigation;

  const [values, setValues] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState(INITIAL_STATE);

  const validate = () => {
    const newErrors = INITIAL_STATE;

    if (!values.username) {
      newErrors.username = 'Usuário é obrigatório!';
    }
    if (!values.email) {
      newErrors.email = 'E-mail é obrigatório!';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = 'E-mail inválido!';
    }

    if (!values.password) {
      newErrors.password = 'Senha é obrigatória!';
    }
    if (!values.confirmPassword) {
      newErrors.confirmPassword = 'Confirmação de senha é obrigatória!';
    } else if (values.password !== values.confirmPassword) {
      newErrors.confirmPassword = 'Senha e confirmação de senha não coincidem!';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = async () => {
    if (!validate()) {
      return;
    }
    try {
      const { displayName, email, uid, photoURL } = await signUp(
        values.email,
        values.password,
        values.username
      );
      await set(`/users/${uid}`, { displayName, email, photoURL });
      setValues(INITIAL_STATE);
      navigate('Home');
    } catch (e) {
      console.log(e);
    }
  };

  return { values, setValues, errors, validate, handleSubmit };
};

export default useFormValidation;