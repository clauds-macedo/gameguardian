import database, {FirebaseDatabaseTypes} from '@react-native-firebase/database';

export const realtimeConfig = {
  dbRef: (path: string) => database().ref(path),

  // Definir valor em um determinado caminho
  set: async (path: string, value: any) => {
    const reference = database().ref(path);
    await reference.set(value);
  },

  // Buscar valor de um determinado caminho
  get: async (path: string) => {
    const reference = database().ref(path);
    const snapshot = await reference.once('value');
    return snapshot.val();
  },

  // Atualizar valores em um determinado caminho
  update: async (path: string, updates: object) => {
    const reference = database().ref(path);
    await reference.update(updates);
  },

  // Remover valor de um determinado caminho
  remove: async (path: string) => {
    const reference = database().ref(path);
    await reference.remove();
  },

  // Ouvir mudanças em um determinado caminho
  listen: (
    path: string,
    callback: (data: FirebaseDatabaseTypes.DataSnapshot) => void,
  ) => {
    const reference = database().ref(path);
    reference.on('value', snapshot => {
      callback(snapshot.val());
    });
    return () => {
      reference.off('value');
    };
  },
};
