import {FlatListProps} from 'react-native';
import {BaseObject} from 'styled-components/dist/types';
import styled from 'styled-components/native';
import colors from '../../global/colors';
import type {ICard} from './components/Card/types';

export const Container = styled.FlatList.attrs({
  contentContainerStyle: {gap: 16},
})<FlatListProps<ICard>, BaseObject>`
  flex: 1;
  background-color: ${colors.primaryBackground};
`;
