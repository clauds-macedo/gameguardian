import {styled} from 'styled-components/native';
import colors from '../../global/colors';
import {InputProps} from './types';

export const StyledInput = styled.TextInput.attrs({
  placeholderTextColor: colors.primaryText,
})<Pick<InputProps, 'mb' | 'mt'>>`
  height: 57px;
  align-items: center;
  border-radius: 12px;
  border: 1px solid #484f5b;
  background-color: rgba(33, 40, 53, 0.43);
  flex-direction: row;
  color: ${colors.primaryText};
  width: 100%;
  padding-left: 16px;
  margin: ${({mb, mt}) => `${mt ?? 0}px 0 ${mb ?? 0}px 0`};
`;
