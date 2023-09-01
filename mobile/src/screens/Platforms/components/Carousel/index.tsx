import React from 'react';
import {Animated} from 'react-native';
import {CarouselContainer, ItemView, StyledImage} from './styles';
import type {CarouselProps} from './types';
import {ITEM_SPACING} from './utils';
const Carousel: React.FC<CarouselProps> = ({data, scrollX}) => {
  return (
    <CarouselContainer
      data={data}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
        useNativeDriver: false,
      })}
      snapToInterval={ITEM_SPACING}
      pagingEnabled
      renderItem={({item}: any) => (
        <ItemView>
          <StyledImage resizeMode="cover" source={{uri: item.src}} />
        </ItemView>
      )}
    />
  );
};

export default Carousel;
