/**
 * Hook utilizado para carregar as dependências iniciais necessárias para o funcionamento do app.
 */

import { firebase } from '@react-native-firebase/auth';
import { useEffect } from 'react';
import { firebaseConfig } from '../../infra/config/firebase.example';

const useLoadDependencies = () => {
  useEffect(() => {
    if (!firebase.apps) {
      firebase.initializeApp(firebaseConfig);
    }
  }, []);
};

export default useLoadDependencies;
