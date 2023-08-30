import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const ITEM_WIDTH = width * 0.8;
export const ITEM_SPACING = (width - ITEM_WIDTH) / 2.5; // Isso fará com que o item anterior e o próximo sejam visíveis.
