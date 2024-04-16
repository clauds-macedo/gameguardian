import type { TextInputProps } from 'react-native';

export type InputProps = TextInputProps & {
  placeholder?: string;
  mb?: number;
  mt?: number;
};
