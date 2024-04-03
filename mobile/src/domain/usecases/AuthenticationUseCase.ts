import { AuthCredentialsDTO } from '../dtos/auth-credentials.dto';
import { User } from '../entities/user';
import { IAuthRepository } from '../repositories/IAuthRepository';

export class SignInWithCredentials {
  constructor(private authRepository: IAuthRepository) {}

  async execute(credentials: AuthCredentialsDTO): Promise<User> {
    return this.authRepository.login(credentials);
  }
}
