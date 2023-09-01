import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import Deals from '../../screens/Deals';
import Home from '../../screens/Home';
import {TabBarComponent} from './components/Tab';

const Tab = createBottomTabNavigator();
const Test = () => <Text>Test</Text>;

export const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        unmountOnBlur: true,
      }}
      tabBar={props => <TabBarComponent {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Alerts" component={Test} />
      <Tab.Screen name="Deals" component={Deals} />
    </Tab.Navigator>
  );
};
