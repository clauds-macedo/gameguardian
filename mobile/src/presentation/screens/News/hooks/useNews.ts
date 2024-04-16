import { useCallback, useEffect, useState } from 'react';
import type { ICard } from '../components/Card/types';
import { newsUseCase } from '../../../../data/usecases/newsUseCase';

export const useNews = () => {
  const [news, setNews] = useState<ICard[]>([] as ICard[]);

  const fetchData = useCallback(async () => {
    const data = await newsUseCase.execute({ url: 'adrenaline' });
    setNews(data);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { news };
};
