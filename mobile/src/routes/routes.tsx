import {NavigationContainer} from '@react-navigation/native';
import {StackNavigation} from './StackNavigation';

export const Routes = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};
