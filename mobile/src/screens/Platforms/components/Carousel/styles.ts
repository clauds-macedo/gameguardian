import {styled} from 'styled-components/native';
import {ITEM_SPACING, ITEM_WIDTH} from './utils';

export const CarouselContainer = styled.FlatList.attrs({
  contentContainerStyle: {paddingRight: ITEM_SPACING},
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  padding-right: ${ITEM_SPACING}px;
`;

export const ItemView = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  width: ${ITEM_WIDTH}px;
  padding-horizontal: ${ITEM_SPACING / 2}px;
  justify-content: center;
`;

export const StyledImage = styled.Image`
  width: 100%;
  height: 85%;
  align-self: center;
  border-radius: 32px;
`;
