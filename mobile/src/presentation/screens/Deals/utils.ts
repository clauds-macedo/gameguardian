import useLanguage from '../../../presentation/hooks/useLanguage';

export const getSubtitle = (route: string, platform: string) => {
  const { languageStrings } = useLanguage();
  let subtitle = '';
  if (route === 'PlatformDeals') {
    subtitle = platform;
  } else {
    subtitle = languageStrings.mostAccessed;
  }
  return subtitle;
};
