import { useRef, useState } from 'react';
import type { Modalize } from 'react-native-modalize';

export const useModalize = () => {
  const [uri, setUri] = useState('');
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = (newUri: string) => {
    setUri(newUri);
    modalizeRef.current?.open();
  };

  return { onOpen, modalizeRef, uri };
};
