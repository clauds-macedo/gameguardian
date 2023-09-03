import {useEffect} from 'react';
import {remoteConfig} from './config';

const useRemoteConfig = () => {
  const {getValue, fetch, getAll, fetchAndActivate} = remoteConfig;

  const fetchRemotely = async () => {
    fetchAndActivate();
  };
  const getConfigValue = async (key: string) => {
    getAll();
    await fetch();
    const value = getValue(key);
    return value.asString();
  };

  useEffect(() => {
    fetchRemotely();
  }, []);

  return {getConfigValue};
};

export default useRemoteConfig;
