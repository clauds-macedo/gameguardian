import styled from 'styled-components/native';

export const Content = styled.View`
  position: absolute;
  align-items: center;
  justify-content: center;
  gap: 16px;
  top: 0;
  bottom: 0;
  left: 0;
  flex-direction: row;
  right: 0;
  padding: 0 16px;
`;

export const CardButtonContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.85,
})``;
