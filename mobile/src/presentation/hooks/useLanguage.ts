import strings from "@infra/global/strings";
import { useLanguageStore } from "../../stores/language";


const useLanguage = () => {
  const { language } = useLanguageStore();
  const languageStrings = strings[language];
  return { languageStrings, language };
};

export default useLanguage;
