import { useCallback, useEffect, useState } from 'react';
import { gamesUseCase } from '../../../../data/usecases/gamesUseCase';
import type { Game } from '../../../../domain/entities/game';

type Fetch = { store: string };

export const useFetchGames = ({ store }: Fetch) => {
  const [games, setGames] = useState<Game[]>([]);

  const getGames = useCallback(async () => {
    const games = await gamesUseCase.execute({ url: `${store}/promotions` });
    setGames(games);
  }, [store]);

  useEffect(() => {
    getGames();
  }, [getGames]);

  return { games };
};
