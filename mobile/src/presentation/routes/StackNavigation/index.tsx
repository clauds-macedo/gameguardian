import { createStackNavigator } from '@react-navigation/stack';
import Deals from '../../screens/Deals';
import Favourites from '../../screens/Favourites';
import Register from '../../screens/Register';
import { BottomTabNavigation } from '../BottomNavigation';
import Login from '../../screens/Login';

const Stack = createStackNavigator();

export const StackNavigation = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Tabs" component={BottomTabNavigation} />
    <Stack.Screen name="PlatformDeals" component={Deals} />
    <Stack.Screen name="Favourites" component={Favourites} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
  </Stack.Navigator>
);
