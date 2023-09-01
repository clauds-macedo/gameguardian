import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {TabParamList} from './types';

const useAppRoute = () => {
  const navigation =
    useNavigation<NavigationProp<ParamListBase | TabParamList>>();

  return navigation;
};

export default useAppRoute;
