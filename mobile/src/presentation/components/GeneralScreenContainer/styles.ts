import styles from '@/infra/global/styles';
import colors from '@infra/global/colors';
import { styled } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${colors.primaryBackground};
  width: ${styles.screenFullWidth}px;
  padding: 16px ${styles.defaultApplicationPadding}px;
`;
