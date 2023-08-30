import {styled} from 'styled-components/native';
import {ITEM_SPACING, ITEM_WIDTH} from './utils';

export const CarouselContainer = styled.FlatList.attrs({
  contentContainerStyle: {paddingRight: ITEM_SPACING},
  snapToInterval: ITEM_WIDTH + ITEM_SPACING,
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  padding-right: ${ITEM_SPACING}px;
`;

export const ItemView = styled.View`
  width: ${ITEM_WIDTH}px;
  padding-horizontal: ${ITEM_SPACING / 2}px;
  justifycontent: center;
`;

export const StyledImage = styled.Image`
  width: 100%;
  height: 85%;
  align-self: center;
  border-radius: 32px;
`;
