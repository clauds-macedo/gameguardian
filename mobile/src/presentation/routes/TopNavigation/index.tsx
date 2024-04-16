import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Host } from 'react-native-portalize';
import { Platforms } from '../../screens/Platforms';
import TopBarComponent from './components/Tab';
import { News } from '../../screens/News';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigation: React.FC = () => (
  <Host>
    <Tab.Navigator
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBar={(props) => <TopBarComponent {...props} />}
      screenOptions={{ swipeEnabled: false }}
    >
      <Tab.Screen name="Platforms" component={Platforms} />
      <Tab.Screen name="News" component={News} />
    </Tab.Navigator>
  </Host>
);
