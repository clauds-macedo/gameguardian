import 'react-native-gesture-handler';

import React from 'react';
import useLoadDependencies from './src/hooks/useLoadDependencies';
import { Routes } from './src/routes/routes';
function App(): JSX.Element {
  useLoadDependencies();
  return <Routes />;
}

export default App;
