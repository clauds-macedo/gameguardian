import React from 'react';
import {CarouselContainer, ItemView, StyledImage} from './styles';
import type {CarouselProps} from './types';
const Carousel: React.FC<CarouselProps> = ({data}) => {
  return (
    <CarouselContainer
      data={data}
      renderItem={({item}: any) => (
        <ItemView>
          <StyledImage resizeMode="cover" source={{uri: item}} />
        </ItemView>
      )}
    />
  );
};

export default Carousel;
