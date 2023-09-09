import React, {useRef} from 'react';
import {Dimensions, Text} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import Card from './components/Card';
import {Container} from './styles';
export const News: React.FC = () => {
  const modalizeRef = useRef<Modalize>(null);
  const onOpen = () => {
    modalizeRef.current?.open();
  };
  return (
    <>
      <Portal>
        <Modalize
          ref={modalizeRef}
          scrollViewProps={{
            showsVerticalScrollIndicator: false,
            stickyHeaderIndices: [0],
          }}
          adjustToContentHeight
          childrenStyle={{
            height: '90%',
            width: Dimensions.get('screen').width,
          }}>
          <Text>asdasd</Text>
          <Text>asdasd</Text>
          <Text>asdasd</Text>
        </Modalize>
      </Portal>
      <Container>
        <Card onPressCard={onOpen} />
      </Container>
    </>
  );
};
