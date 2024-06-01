import { useCallback, useEffect, useState } from 'react';
import { remoteConfigUseCase } from '../../../data/usecases/remoteConfigUseCase';

export interface PlatformInfo {
  name: string;
  src: string;
}

const useGetPlatforms = () => {
  const [platforms, setPlatforms] = useState<PlatformInfo[]>(
    [] as PlatformInfo[]
  );

  const getPlatforms = useCallback(async () => {
    await remoteConfigUseCase.establishRemoteConfigConnection();
    const value = await remoteConfigUseCase.getValue('platforms');
    console.log(value.asArray());
    if (value) {
      setPlatforms(value.asArray() as PlatformInfo[]);
    }
  }, []);

  useEffect(() => {
    getPlatforms();
  }, [getPlatforms]);

  return { platforms };
};

export default useGetPlatforms;
