import React from 'react';

const useFormValidation = () => {
  const [values, setValues] = React.useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = React.useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const validate = () => {
    let newErrors = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    };

    if (!values.username) newErrors.username = 'Usuário é obrigatório!';
    if (!values.email) newErrors.email = 'E-mail é obrigatório!';
    else if (!/\S+@\S+\.\S+/.test(values.email))
      newErrors.email = 'E-mail inválido!';

    if (!values.password) newErrors.password = 'Senha é obrigatória!';
    if (!values.confirmPassword)
      newErrors.confirmPassword = 'Confirmação de senha é obrigatória!';
    else if (values.password !== values.confirmPassword)
      newErrors.confirmPassword = 'Senha e confirmação de senha não coincidem!';

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  return {values, setValues, errors, validate};
};

export default useFormValidation;
