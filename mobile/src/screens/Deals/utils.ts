import useLanguage from '../../hooks/useLanguage';

export const getSubtitle = (route: string, platform: string) => {
  const {languageStrings} = useLanguage();
  let subtitle = '';
  if (route === 'PlatformDeals') {
    subtitle = platform;
  } else {
    subtitle = languageStrings.mostAccessed;
  }
  return subtitle;
};
