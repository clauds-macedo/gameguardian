import {styled} from 'styled-components/native';
import colors from '../../global/colors';
import styles from '../../global/styles';
import fonts from '../../global/fonts';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  width: ${styles.screenFullWidth}px;
  padding: 16px;
  border-width: 1px;
  border-color: #23262d;
  flex-direction: row;
  gap: 12px;
`;

export const OptionLabel = styled.Text`
  color: ${colors.primaryText};
  font-family: ${fonts.regular};
`;
