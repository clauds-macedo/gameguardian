import { useLanguageStore } from '@/stores/language';
import strings from '@infra/global/strings';

const useLanguage = () => {
  const { language } = useLanguageStore();
  const languageStrings = strings[language];
  return { languageStrings, language };
};

export default useLanguage;
