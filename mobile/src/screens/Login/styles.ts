import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import colors from '../../global/colors';
import fonts from '../../global/fonts';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.terciaryText};
  padding: 16px;
  justify-content: center;
  background-color: ${colors.primaryBackground};
`;

export const ButtonContainer = styled.View`
  justify-content: flex-end;
`;

export const FormContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const StyledButton = styled.TouchableOpacity`
  height: 57px;
  background-color: ${colors.primaryButton};
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 8px 0;
`;

export const ButtonText = styled.Text`
  color: ${colors.primaryText};
  font-family: ${fonts.bold};
`;

export const ImageBackground = styled.ImageBackground`
  position: absolute;
  flex: 1;
  height: ${Dimensions.get('screen').height}px;
  width: ${Dimensions.get('screen').width}px;
  top: 0;
  opacity: 0.045;
`;
