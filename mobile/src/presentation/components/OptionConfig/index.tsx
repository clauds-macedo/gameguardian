import colors from '@infra/global/colors';
import React from 'react';
import useLanguage from '../../../presentation/hooks/useLanguage';
import useAppRoute from '../../routes/hooks/useAppRoute';
import { Container, OptionLabel } from './styles';
import type { IOptionConfig } from './types';

const OptionConfig: React.FC<IOptionConfig> = ({
  icon,
  name,
  navigateScreen,
}) => {
  const { languageStrings } = useLanguage();
  const Icon = icon;
  const { navigate } = useAppRoute().navigation;
  return (
    <Container
      onPress={() => {
        navigate(navigateScreen as never);
      }}
    >
      <Icon width={32} stroke={colors.primaryButton} />
      <OptionLabel>{languageStrings[name as keyof typeof languageStrings]}</OptionLabel>
    </Container>
  );
};

export default OptionConfig;
