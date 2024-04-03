import colors from '../../global/colors';
import { IMainButton } from './types';

const variantToColorMap = {
  primary: colors.primaryButton,
  secondary: colors.secondaryButton,
  tertiary: colors.tertiaryButton,
};

export const getBackgroundColor = ({
  variant,
}: Pick<IMainButton, 'variant'>): string => {
  return variantToColorMap[variant] || variantToColorMap.primary;
};
