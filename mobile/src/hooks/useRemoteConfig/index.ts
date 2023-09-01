import {remoteConfig} from './config';

const useRemoteConfig = () => {
  const {getValue, fetch, getAll} = remoteConfig;
  const getConfigValue = async (key: string) => {
    await fetch();
    const value = getValue(key);
    return value.asString();
  };
  return {getConfigValue};
};

export default useRemoteConfig;
