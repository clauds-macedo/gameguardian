import {styled} from 'styled-components/native';
import colors from '../../global/colors';
import styles from '../../global/styles';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${colors.primaryBackground};
  width: ${styles.screenFullWidth}px;
  padding: 16px ${styles.defaultApplicationPadding}px;
`;
