import React from 'react';
import {Animated} from 'react-native';
import {CarouselContainer, ItemView, StyledImage} from './styles';
import type {CarouselProps} from './types';
const Carousel: React.FC<CarouselProps> = ({data, scrollX}) => {
  return (
    <CarouselContainer
      data={data}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
        useNativeDriver: false,
      })}
      pagingEnabled
      renderItem={({item}: any) => (
        <ItemView>
          <StyledImage resizeMode="cover" source={{uri: item}} />
        </ItemView>
      )}
    />
  );
};

export default Carousel;
