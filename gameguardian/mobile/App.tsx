import 'react-native-gesture-handler';

import React from 'react';
import {View} from 'react-native';
import PageTitle from './src/components/PageTitle';
import colors from './src/global/colors';

function App(): JSX.Element {
  return (
    <View style={{backgroundColor: colors.primaryBackground, height: '100%'}}>
      <PageTitle title="Tudo" subtitle="Explore" />
    </View>
  );
}

export default App;
