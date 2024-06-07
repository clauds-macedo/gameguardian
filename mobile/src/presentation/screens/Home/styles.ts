import colors from '@/infra/global/colors';
import styles from '@/infra/global/styles';
import { styled } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primaryBackground};
  padding-top: 16px;
  padding-horizontal: ${styles.defaultApplicationPadding}px;
`;
