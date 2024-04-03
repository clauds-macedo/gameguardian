import auth from '@react-native-firebase/auth';
import { AuthCredentialsDTO } from '../../../domain/dtos/auth-credentials.dto';
import { RegisterDTO } from '../../../domain/dtos/register-credentials.dto';
import type { User } from '../../../domain/entities/user';
import type { IAuthRepository } from '../../../domain/repositories/IAuthRepository';

export class AuthRepository implements IAuthRepository {
  async login(requestDTO: AuthCredentialsDTO): Promise<User> {
    const { email, password } = requestDTO;
    const result = await auth().signInWithEmailAndPassword(email, password);
    return { id: result.user.uid, email: result.user.email! };
  }

  async register(requestDTO: RegisterDTO): Promise<User> {
    const { name, email, password } = requestDTO;
    const result = await auth().createUserWithEmailAndPassword(email, password);

    return { email: result.user.email!, id: result.user.uid, name };
  }

  async logout() {
    auth().signOut();
  }
}
