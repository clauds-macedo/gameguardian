import {Animated} from 'react-native';
import type {PlatformInfo} from '../../hooks/useGetPlatforms';

export interface CarouselProps {
  data: {name: string; src: string}[];
  scrollX: Animated.Value;
}

export interface RemoteConfigPlatforms {
  platforms: {
    [key: string]: PlatformInfo;
  };
}
