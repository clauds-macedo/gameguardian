import { StyledInput } from './styles';
import type { InputProps } from './types';

const Input: React.FC<InputProps> = ({ placeholder, ...props }) => {
  return <StyledInput placeholder={placeholder} {...props} />;
};

export default Input;
