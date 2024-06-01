import colors from '@infra/global/colors';
import type { IMainButton } from './types';

const variantToColorMap = {
  primary: colors.primaryButton,
  secondary: colors.secondaryButton,
  tertiary: colors.tertiaryButton,
};

export const getBackgroundColor = ({
  variant,
}: Pick<IMainButton, 'variant'>): string =>
  variantToColorMap[variant] || variantToColorMap.primary;
