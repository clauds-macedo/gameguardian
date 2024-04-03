import { AuthCredentialsDTO } from '../dtos/auth-credentials.dto';
import { User } from '../entities/User';

export interface IAuthRepository {
  login(requestDTO: AuthCredentialsDTO): Promise<User>;
}
