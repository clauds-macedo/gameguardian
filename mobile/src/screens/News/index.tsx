import React, {useEffect, useRef, useState} from 'react';
import {Dimensions} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import WebView from 'react-native-webview';
import Card from './components/Card';
import {ICard} from './components/Card/types';
import {Container} from './styles';
const {height, width} = Dimensions.get('screen');
export const News: React.FC = () => {
  const modalizeRef = useRef<Modalize>(null);
  const onOpen = (newUri: string) => {
    setUri(newUri);
    modalizeRef.current?.open();
  };

  const [data, setData] = useState<ICard[]>([] as ICard[]);
  const [uri, setUri] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const getData = await fetch('http://192.168.0.105:3000/news/adrenaline');
      const data = await getData.json();
      setData(data);
    };
    fetchData();
  }, []);
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
            height: '95%',
            width,
          }}>
          <WebView source={{uri}} style={{height}} startInLoadingState />
        </Modalize>
      </Portal>
      <Container
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <Card
            link={item.link}
            image={item.image}
            onPressCard={() => onOpen(item.link)}
            title={item.title}
          />
        )}
      />
    </>
  );
};
