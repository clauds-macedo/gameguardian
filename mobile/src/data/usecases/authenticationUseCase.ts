import { AuthenticationUseCase } from '../../domain/usecases/AuthenticationUseCase';
import { AuthRepository } from '../repositories/AuthRepository';

export const authenticationUseCase = new AuthenticationUseCase(
  new AuthRepository()
);
