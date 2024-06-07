import {
  offlineDatabaseReadUseCase,
  offlineDatabaseSaveUseCase,
} from '@/data/usecases/offlineDatabaseUseCase';
import { create } from 'zustand';

type LanguageStore = {
  language: 'pt' | 'en';
  setLanguage: (newLanguage: 'pt' | 'en') => void;
};

export const useLanguageStore = create<LanguageStore>((set) => ({
  language:
    (offlineDatabaseReadUseCase.execute(
      '@language',
      'string'
    ) as LanguageStore['language']) ?? 'pt',
  setLanguage: (newLanguage: 'pt' | 'en') => {
    offlineDatabaseSaveUseCase.execute({
      key: '@language',
      value: newLanguage,
    });
    set(() => ({ language: newLanguage }));
  },
}));
