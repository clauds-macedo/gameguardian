import { Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
import colors from '../../../infra/global/colors';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primaryBackground};
  width: ${width}px;
`;

export const Item = styled.View`
  width: ${width}px;
  height: 200px;
  justify-content: center;
  align-items: center;
`;

export const IndicatorContainer = styled.View`
  flex-direction: row;
  margin-top: 20px;
`;

export const Indicator = styled(Animated.View)<{ selected?: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${(props) => (props.selected ? 'blue' : 'gray')};
  margin-horizontal: 5px;
`;
