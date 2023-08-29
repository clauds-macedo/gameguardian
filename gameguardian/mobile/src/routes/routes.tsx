import {NavigationContainer} from '@react-navigation/native';
import {BottomTabNavigation} from './BottomNavigation';

export const Routes = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigation />
    </NavigationContainer>
  );
};
