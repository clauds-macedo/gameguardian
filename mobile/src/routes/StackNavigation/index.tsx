import {createStackNavigator} from '@react-navigation/stack';
import Deals from '../../screens/Deals';
import {BottomTabNavigation} from '../BottomNavigation';

const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Tabs" component={BottomTabNavigation} />
      <Stack.Screen name="PlatformDeals" component={Deals} />
    </Stack.Navigator>
  );
};
