import {SvgProps} from 'react-native-svg';

export interface IOptionConfig {
  name: string;
  icon: (props: SvgProps) => JSX.Element;
  navigateScreen: string;
}
