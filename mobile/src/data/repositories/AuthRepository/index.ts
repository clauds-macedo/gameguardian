import auth from '@react-native-firebase/auth';
import { AuthCredentialsDTO } from '../../../domain/dtos/auth-credentials.dto';
import { User } from '../../../domain/entities/user';
import { IAuthRepository } from '../../../domain/repositories/IAuthRepository';

export class AuthRepository implements IAuthRepository {
  async login(requestDTO: AuthCredentialsDTO): Promise<User> {
    const { email, password } = requestDTO;
    const result = await auth().signInWithEmailAndPassword(email, password);
    return { id: result.user.uid, email: result.user.email! };
  }
}
