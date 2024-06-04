import type { FirebaseAuthTypes } from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';
import { MMKV as MMKVStorage } from 'react-native-mmkv';

const MMKV = new MMKVStorage();

export const authConfig = {
  // Ao registrar ou logar, persiste no dispositivo as informações do usuário
  persist: (user: string) => {
    MMKV.set('@user', user);
  },

  // Criar uma nova conta de usuário
  signUp: async (email: string, password: string, displayName: string) => {
    const { user } = await auth().createUserWithEmailAndPassword(
      email,
      password
    );
    MMKV.set('@user', JSON.stringify({ ...user, displayName }));
    return user;
  },

  // Desautenticar o usuário atual
  signOut: async () => {
    MMKV.delete('@user');
    return auth().signOut();
  },

  // Recuperar senha
  resetPassword: async (email: string) => auth().sendPasswordResetEmail(email),

  // Atualizar senha do usuário atual
  updatePassword: async (newPassword: string) => {
    if (auth().currentUser) {
      return auth().currentUser?.updatePassword(newPassword);
    }
    throw new Error('No user is currently logged in');
  },

  // Ouvir mudanças no status de autenticação do usuário
  onAuthStateChanged: (
    callback: (user: FirebaseAuthTypes.User | null) => void
  ) => auth().onAuthStateChanged(callback),

  // Obter o usuário atualmente autenticado
  isLoggedIn: (): boolean => MMKV.contains('@user'),

  // Obtém o usuário atual guardado no storage
  getCurrentUser: () => {
    if (!authConfig.isLoggedIn()) {
      return;
    }
    const user: FirebaseAuthTypes.User = JSON.parse(
      MMKV.getString('@user') ?? ''
    );
    // eslint-disable-next-line consistent-return
    return user;
  },
};
