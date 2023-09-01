import {
  NavigationProp,
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import type {NavigationParamList} from './types';

const useAppRoute = () => {
  const navigation =
    useNavigation<NavigationProp<ParamListBase | NavigationParamList>>();
  const route = useRoute<RouteProp<NavigationParamList>>();

  return {navigation, route};
};

export default useAppRoute;
