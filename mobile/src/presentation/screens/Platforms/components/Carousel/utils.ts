import { Dimensions } from 'react-native';
import { RemoteConfigPlatforms } from './types';

const { width } = Dimensions.get('window');

export const ITEM_WIDTH = width * 0.8;
export const ITEM_SPACING = (width - ITEM_WIDTH) / 2.5;

export const convertPlatformObjectToArray = (obj: RemoteConfigPlatforms) => {
  const {platforms} = obj;

  return Object.keys(platforms).map((key) => platforms[key]);
};
