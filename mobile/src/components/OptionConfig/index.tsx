import React from 'react';
import colors from '../../global/colors';
import useLanguage from '../../hooks/useLanguage';
import useAppRoute from '../../routes/hooks/useAppRoute';
import {Container, OptionLabel} from './styles';
import {IOptionConfig} from './types';

const OptionConfig: React.FC<IOptionConfig> = ({
  icon,
  name,
  navigateScreen,
}) => {
  const {languageStrings} = useLanguage();
  const Icon = icon;
  const {navigate} = useAppRoute().navigation;
  return (
    <Container
      onPress={() => {
        navigate(navigateScreen as never);
      }}>
      <Icon width={32} stroke={colors.primaryButton} />
      <OptionLabel>{languageStrings[name]}</OptionLabel>
    </Container>
  );
};

export default OptionConfig;
