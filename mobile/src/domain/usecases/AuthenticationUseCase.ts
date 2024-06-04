import type { AuthCredentialsDTO } from '../dtos/auth-credentials.dto';
import type { RegisterDTO } from '../dtos/register-credentials.dto';
import type { User } from '../entities/user';
import type { IAuthRepository } from '../repositories/IAuthRepository';

export class AuthenticationUseCase {
  constructor(private authRepository: IAuthRepository) {}

  async login(credentials: AuthCredentialsDTO): Promise<User> {
    return this.authRepository.login(credentials);
  }

  async register(credentials: RegisterDTO): Promise<User> {
    return this.authRepository.register(credentials);
  }
}
