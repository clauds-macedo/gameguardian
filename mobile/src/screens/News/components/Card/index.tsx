import React from 'react';
import {Image} from 'react-native';
import NewsCardLabel from '../Label';
import LinearCardBackground from '../LinearCardBackground';
import type {ICard} from './types';

const Card = ({onPressCard, link, image, title}: ICard) => {
  return (
    <LinearCardBackground onPress={onPressCard}>
      <Image
        source={{
          uri: image,
        }}
        style={{flex: 0.8, height: 128}}
        borderRadius={23}
        resizeMode="cover"
      />
      <NewsCardLabel>{title}</NewsCardLabel>
    </LinearCardBackground>
  );
};

export default Card;
