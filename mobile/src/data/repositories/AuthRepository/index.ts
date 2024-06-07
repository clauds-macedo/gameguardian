import type { AuthCredentialsDTO } from '@domain/dtos/auth-credentials.dto';
import type { RegisterDTO } from '@domain/dtos/register-credentials.dto';
import type { User } from '@domain/entities/user';
import type { IAuthRepository } from '@domain/repositories/IAuthRepository';
import auth from '@react-native-firebase/auth';
import { DatabaseRepository } from '../DatabaseRepository';

export class AuthRepository
  extends DatabaseRepository<User>
  implements IAuthRepository
{
  constructor(collection: string) {
    super(collection);
  }

  async login(requestDTO: AuthCredentialsDTO): Promise<User> {
    const { email, password } = requestDTO;
    const result = await auth().signInWithEmailAndPassword(email, password);
    return {
      email: result.user.email!,
      id: result.user.uid,
      name: result.user.displayName,
      photo: result.user.photoURL,
    };
  }

  async register(requestDTO: RegisterDTO): Promise<User> {
    const { name, email, password } = requestDTO;
    const result = await auth().createUserWithEmailAndPassword(email, password);

    const { user } = result;
    const userData = { ...requestDTO, photo: user.photoURL };

    await this.create(result.user.uid, userData);

    return {
      email: result.user.email!,
      id: result.user.uid,
      name,
      photo: result.user.photoURL,
    };
  }

  async logout() {
    auth().signOut();
  }
}
