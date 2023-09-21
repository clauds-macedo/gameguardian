import styled from 'styled-components/native';
import colors from '../../global/colors';

export const TextContainer = styled.View`
  width: 100%;
  margin-left: -4px;
`;

export const TitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 8px;
  /* width: 100%; */
  /* background-color: red; */
`;

export const Text = styled.Text`
  color: ${colors.primaryText};
  font-weight: bold;
  margin: 8px 0px;
`;

export const BackgroundImage = styled.Image`
  opacity: 0.9;
  width: 100%;
  height: 30%;
`;
