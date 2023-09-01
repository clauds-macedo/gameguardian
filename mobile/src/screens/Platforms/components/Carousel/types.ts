import {Animated} from 'react-native';

export interface CarouselProps {
  data: {name: string; src: string}[];
  scrollX: Animated.Value;
}
