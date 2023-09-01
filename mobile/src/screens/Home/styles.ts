import {styled} from 'styled-components/native';
import colors from '../../global/colors';
import styles from '../../global/styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primaryBackground};
  padding: 0 ${styles.defaultApplicationPadding}px;
`;
