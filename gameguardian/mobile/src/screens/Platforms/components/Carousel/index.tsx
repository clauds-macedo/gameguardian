import React from 'react';
import {CarouselContainer, ItemView, StyledImage} from './styles';
import type {CarouselProps} from './types';
import useScroller from './useScroller';
import {ITEM_SPACING, ITEM_WIDTH} from './utils';

const Carousel: React.FC<CarouselProps> = ({data}) => {
  const {carouselRef, extendedData, handleScroll} = useScroller({
    data,
    ITEM_SPACING,
    ITEM_WIDTH,
  });
  return (
    <CarouselContainer
      ref={carouselRef}
      data={extendedData}
      onScroll={handleScroll}
      renderItem={({item}) => (
        <ItemView>
          <StyledImage resizeMode="cover" source={{uri: item}} />
        </ItemView>
      )}
    />
  );
};

export default Carousel;
