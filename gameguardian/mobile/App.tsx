import 'react-native-gesture-handler';

import React from 'react';
import {View} from 'react-native';
import colors from './src/global/colors';
import {Routes} from './src/routes/routes';

function App(): JSX.Element {
  return (
    <View style={{backgroundColor: colors.primaryBackground, height: '100%'}}>
      <Routes />
    </View>
  );
}

export default App;
