import { MMKV as MMKVStorage } from 'react-native-mmkv';
import { create } from 'zustand';

const MMKV = new MMKVStorage();

type LanguageStore = {
  language: 'pt' | 'en';
  setLanguage: (newLanguage: 'pt' | 'en') => void;
};

export const useLanguageStore = create<LanguageStore>((set) => ({
  language: (MMKV.getString('@language') as LanguageStore['language']) ?? 'pt',
  setLanguage: (newLanguage: 'pt' | 'en') => {
    MMKV.set('@language', newLanguage);
    set(() => ({ language: newLanguage }));
  },
}));
