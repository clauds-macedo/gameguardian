import { authConfig } from '@infra/config/auth-config';
import { realtimeConfig } from '@infra/config/database-config';
import { useCallback } from 'react';
import type { IFavourite } from './types';

const useFavouriteLogic = ({ favourite, title }: IFavourite) => {
  const { set, remove } = realtimeConfig;
  const user = authConfig.getCurrentUser();

  const handleToggleFavourite = useCallback(async () => {
    const path = `/users/${user?.uid}/favourites/${title}`;

    if (favourite) {
      await remove(path);
    } else {
      await set(path, true);
    }
  }, [favourite]);

  return {
    handleToggleFavourite,
  };
};

export default useFavouriteLogic;
