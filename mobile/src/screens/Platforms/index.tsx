import React, { useRef } from 'react';
import { Animated } from 'react-native';
import { ExpandingDot } from 'react-native-animated-pagination-dots';
import colors from '../../global/colors';
import Carousel from './components/Carousel';
import useGetPlatforms from './hooks/useGetPlatforms';
import { Container } from './styles';

export const Platforms: React.FC = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const { platforms } = useGetPlatforms();

  return (
    <Container>
      <Carousel data={platforms} scrollX={scrollX} />
      <ExpandingDot
        data={platforms}
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
