import React from 'react';
import {FlatList, Image, View} from 'react-native';
import {CarouselProps} from './types';
import {ITEM_SPACING, ITEM_WIDTH} from './utils';

const Carousel: React.FC<CarouselProps> = ({data}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <View style={{width: ITEM_WIDTH, paddingHorizontal: ITEM_SPACING / 2}}>
          <Image
            resizeMode="cover"
            source={{uri: item}}
            style={{
              width: '100%',
              height: '85%',
              borderRadius: 32,
              alignSelf: 'center',
            }}
          />
        </View>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={ITEM_WIDTH + ITEM_SPACING}
      decelerationRate="fast"
      contentContainerStyle={{
        paddingRight: ITEM_SPACING,
      }}
    />
  );
};

export default Carousel;
