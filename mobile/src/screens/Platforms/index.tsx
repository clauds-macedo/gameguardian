import React from 'react';
import {Animated} from 'react-native';
import {ExpandingDot} from 'react-native-animated-pagination-dots';
import colors from '../../global/colors';
import Carousel from './components/Carousel';
import {Container} from './styles';
import {platformData} from './utils';

export const Platforms: React.FC = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <Container>
      <Carousel data={platformData} scrollX={scrollX} />
      <ExpandingDot
        data={platformData}
        expandingDotWidth={30}
        scrollX={scrollX}
        inActiveDotOpacity={0.6}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 5,
        }}
        containerStyle={{}}
        activeDotColor={colors.primaryButton}
      />
    </Container>
  );
};
