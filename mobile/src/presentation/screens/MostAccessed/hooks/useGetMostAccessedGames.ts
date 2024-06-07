import { gameClicksUseCase } from '@/data/usecases/gameClicksUseCase';
import { useCallback, useEffect, useState } from 'react';

const useGetMostAccessedGamesFromDay = () => {
  const [mostAccessedGamesFromDay, setMostAccessedGamesFromDay] = useState([]);

  const getMostAccessedGamesFromDatabase = useCallback(() => {
    gameClicksUseCase.readClicks();
  }, []);

  useEffect(() => {
    getMostAccessedGamesFromDatabase();
  }, [getMostAccessedGamesFromDatabase]);

  return { mostAccessedGamesFromDay };
};

export default useGetMostAccessedGamesFromDay;
