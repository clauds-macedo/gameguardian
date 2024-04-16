import type { ViewStyle } from 'react-native';

export interface IMainButton {
  variant: 'primary' | 'secondary' | 'tertiary';
  // JSX do ícone
  icon?: JSX.Element;
  // Margem bottom e margem top
  mb?: number;
  mt?: number;
  // Mensagem do botão
  label?: string;
  onPressButton?: () => void;
  // estilos customizados
  style?: ViewStyle;
}
