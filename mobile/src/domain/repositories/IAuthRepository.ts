import type { AuthCredentialsDTO } from '../dtos/auth-credentials.dto';
import type { RegisterDTO } from '../dtos/register-credentials.dto';
import type { User } from '../entities/User';

export interface IAuthRepository {
  login(requestDTO: AuthCredentialsDTO): Promise<User>;
  register(requestDTO: RegisterDTO): Promise<User>;
  logout: () => Promise<void>;
}
