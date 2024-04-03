import { useEffect, useState } from 'react';
import useRemoteConfig from '../../../hooks/useRemoteConfig';
import { convertPlatformObjectToArray } from '../components/Carousel/utils';

export interface PlatformInfo {
  name: string;
  src: string;
}

const useGetPlatforms = () => {
  const [platforms, setPlatforms] = useState<PlatformInfo[]>(
    [] as PlatformInfo[]
  );
  const { getConfigValue } = useRemoteConfig();

  const getPlatforms = async () => {
    const value = await getConfigValue('platforms');
    if (value) {
      setPlatforms(convertPlatformObjectToArray(JSON.parse(value)));
    }
  };

  useEffect(() => {
    getPlatforms();
  }, []);

  return { platforms };
};

export default useGetPlatforms;
