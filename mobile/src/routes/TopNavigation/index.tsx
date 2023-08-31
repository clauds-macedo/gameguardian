import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {News} from '../../screens/News';
import {Platforms} from '../../screens/Platforms';
import TopBarComponent from './components/Tab';
const Tab = createMaterialTopTabNavigator();

export const TopTabNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      tabBar={props => <TopBarComponent {...props} />}
      screenOptions={{swipeEnabled: false}}>
      <Tab.Screen name="Platforms" component={Platforms} />
      <Tab.Screen name="News" component={News} />
    </Tab.Navigator>
  );
};
