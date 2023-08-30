import React from 'react';
import {FlatList} from 'react-native';
import {CarouselProps} from './types';

interface ScrollerProps extends CarouselProps {
  ITEM_WIDTH: number;
  ITEM_SPACING: number;
}

const useScroller = ({data, ITEM_SPACING, ITEM_WIDTH}: ScrollerProps) => {
  const MULTIPLIER = 3;
  const extendedData = Array(MULTIPLIER).fill(data).flat();
  const carouselRef = React.useRef<FlatList>(null);

  const handleScroll = event => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const length = data.length;

    if (
      scrollPosition >
      (ITEM_WIDTH + ITEM_SPACING) * length * (MULTIPLIER - 0.5)
    ) {
      carouselRef.current?.scrollToOffset({
        offset: (ITEM_WIDTH + ITEM_SPACING) * length * (MULTIPLIER - 2),
        animated: false,
      });
    }

    if (scrollPosition < (ITEM_WIDTH + ITEM_SPACING) * length * 0.5) {
      carouselRef.current?.scrollToOffset({
        offset: (ITEM_WIDTH + ITEM_SPACING) * length,
        animated: false,
      });
    }
  };
  return {handleScroll, extendedData, carouselRef};
};

export default useScroller;
