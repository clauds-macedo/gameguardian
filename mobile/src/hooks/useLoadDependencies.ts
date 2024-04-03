/**
 * Hook utilizado para carregar as dependências iniciais necessárias para o funcionamento do app.
 */

import { useEffect } from 'react';
import { firebase, firebaseConfig } from '../config/firebase';

const useLoadDependencies = () => {
  useEffect(() => {
    if (!firebase.apps) {
      firebase.initializeApp(firebaseConfig);
    }
  }, []);
};

export default useLoadDependencies;
