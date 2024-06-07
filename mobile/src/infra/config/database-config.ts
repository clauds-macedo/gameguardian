import type {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import firestore from '@react-native-firebase/firestore';

export const realtimeConfig = {
  // Referência a um documento em um determinado caminho
  docRef: (path: string) => firestore().doc(path),

  // Definir valor em um determinado documento
  set: async (path: string, value: any) => {
    const documentReference = firestore().collection('games').doc(path);
    await documentReference.set(value);
  },

  // Buscar valor de um determinado documento
  get: async (path: string) => {
    const documentReference = firestore().collection('games').doc(path);
    const documentSnapshot = await documentReference.get();
    return documentSnapshot.data();
  },

  // Atualizar valores em um determinado documento
  update: async (path: string, updates: object) => {
    const documentReference = firestore().collection('games');
    await documentReference.doc(path).update(updates);
  },

  // Remover um documento de um determinado caminho
  remove: async (path: string) => {
    const documentReference = firestore().collection('games').doc(path);
    await documentReference.delete();
  },

  // Ouvir mudanças em um determinado documento
  listen: (
    path: string,
    callback: (
      // eslint-disable-next-line no-unused-vars
      data?: FirebaseFirestoreTypes.DocumentData
    ) => void
  ) => {
    const documentReference = firestore().collection('games').doc(path);
    const unsubscribe = documentReference.onSnapshot((documentSnapshot) => {
      callback(documentSnapshot.data());
    });
    return unsubscribe; // Função para parar de ouvir as mudanças
  },
};
