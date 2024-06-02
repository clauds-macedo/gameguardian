import { UserValidationService } from '@/domain/services/UserValidationService';

type ValidationRecord = Record<string, string | undefined>;

export const INITIAL_STATE: ValidationRecord = {
  username: undefined,
  email: undefined,
  password: undefined,
  confirmPassword: undefined,
};

const getUsernameValidation = (validator: UserValidationService, username?: string) => validator.validateName(username ?? '');
const getEmailValidation = (validator: UserValidationService, email?: string) => validator.validateEmail(email ?? '');
const getPasswordValidation = (validator: UserValidationService, password?: string) => validator.validatePassword(password ?? '');
const getConfirmPasswordValidation = (validator: UserValidationService, password?: string, confirmPassword?: string) => validator.passwordsMatch(password ?? '', confirmPassword ?? '');

export const validate = (language: string, values: ValidationRecord): ValidationRecord => {
  const validationService = new UserValidationService(language);
  const newErrors = { ...INITIAL_STATE };

  newErrors.username = getUsernameValidation(validationService, values.username);
  newErrors.email = getEmailValidation(validationService, values.email);
  newErrors.password = getPasswordValidation(validationService, values.password);
  newErrors.confirmPassword = getConfirmPasswordValidation(validationService, values.password, values.confirmPassword);

  return newErrors;
};

export const hasErrors = (errors: ValidationRecord) => Object.values(errors).some((error) => error !== undefined);
