import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TopBarComponent from '../../../routes/TopNavigation/components/Tab';
import Platforms from './Platforms';
import Requirements from './Requirements';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      tabBar={props => <TopBarComponent {...props} />}
      screenOptions={{swipeEnabled: false}}>
      <Tab.Screen name="Platforms" component={Platforms} />
      <Tab.Screen name="Requirements" component={Requirements} />
      {/* ...resto das rotas */}
    </Tab.Navigator>
  );
};
