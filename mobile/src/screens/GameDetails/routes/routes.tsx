import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TopBarComponent from '../../../routes/TopNavigation/components/Tab';
import Info from './Info';
import Platforms from './Platforms';
import Requirements from './Requirements';
import Screenshots from './Screenshots';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      tabBar={props => <TopBarComponent {...props} />}
      screenOptions={{swipeEnabled: true}}>
      <Tab.Screen name="Platforms" component={Platforms} />
      <Tab.Screen name="Requirements" component={Requirements} />
      <Tab.Screen name="Screenshots" component={Screenshots} />
      <Tab.Screen name="Info" component={Info} />
    </Tab.Navigator>
  );
};
