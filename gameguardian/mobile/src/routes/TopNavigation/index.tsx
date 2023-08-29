import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Platforms} from '../../screens/Platforms';
const Tab = createMaterialTopTabNavigator();

export const TopTabNavigation: React.FC = () => {
  return (
    <Tab.Navigator tabBar={props => <></>}>
      <Tab.Screen name="Platforms" component={Platforms} />
      {/* <Tab.Screen name="Notícias" component={News} /> */}
    </Tab.Navigator>
  );
};
