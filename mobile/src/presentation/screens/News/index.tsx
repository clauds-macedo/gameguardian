import React from 'react';
import { Dimensions } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import WebView from 'react-native-webview';
import Card from './components/Card';
import { useModalize } from './hooks/useModalize';
import { useNews } from './hooks/useNews';
import { Container } from './styles';

const { height, width } = Dimensions.get('screen');
export const News: React.FC = () => {
  const { news } = useNews();
  const { modalizeRef, onOpen, uri } = useModalize();
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
          }}
        >
          <WebView source={{ uri }} style={{ height }} startInLoadingState />
        </Modalize>
      </Portal>
      <Container
        data={news}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
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
