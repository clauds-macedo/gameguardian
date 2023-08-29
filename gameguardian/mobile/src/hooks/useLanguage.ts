import strings from '../global/strings';
import {useLanguageStore} from '../stores/language';

const useLanguage = () => {
  const {language} = useLanguageStore();
  const languageStrings = strings[language];
  return {languageStrings};
};

export default useLanguage;
