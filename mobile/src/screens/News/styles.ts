import styled from 'styled-components/native';
import colors from '../../global/colors';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {gap: 16},
})`
  flex: 1;
  background-color: ${colors.primaryBackground};
`;
