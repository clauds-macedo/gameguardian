import React from 'react';
import type { IMainButton } from './types';
import { ButtonText, StyledButton } from './styles';

const MainButton: React.FC<IMainButton> = ({
  variant = 'primary',
  icon,
  label,
  mb,
  mt,
  onPressButton,
  style,
}) => (
    <StyledButton
      variant={variant}
      mb={mb}
      mt={mt}
      onPress={onPressButton}
      style={{ ...style }}
    >
      {icon && icon}
      <ButtonText>{label}</ButtonText>
    </StyledButton>
  );

export default MainButton;
