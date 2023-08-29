import React from 'react';
import {Text, View} from 'react-native';
import colors from '../../global/colors';

export const News: React.FC = () => {
  return (
    <View style={{flex: 1, backgroundColor: colors.primaryBackground}}>
      <Text>News</Text>
    </View>
  );
};
