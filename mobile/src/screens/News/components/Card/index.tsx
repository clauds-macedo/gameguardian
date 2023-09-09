import React from 'react';
import {Image} from 'react-native';
import NewsCardLabel from '../Label';
import LinearCardBackground from '../LinearCardBackground';
import type {ICard} from './types';

const Card = ({onPressCard}: ICard) => {
  return (
    <LinearCardBackground onPress={onPressCard}>
      <Image
        source={{
          uri: 'https://www.adrenaline.com.br/wp-content/plugins/seox-image-magick/imagick_convert.php?width=910&height=568&format=webp&quality=91&imagick=uploads.adrenaline.com.br/2023/09/Chefe-criativo-de-Fortnite-esta-deixando-a-Epic-Games-912x569.jpg',
        }}
        style={{flex: 0.8, height: 128}}
        borderRadius={23}
        resizeMode="cover"
      />
      <NewsCardLabel>
        FIFA 23 lidera vendas no PS5; veja os mais baixados na PS Store em
        agosto
      </NewsCardLabel>
    </LinearCardBackground>
  );
};

export default Card;
