import {remoteConfig} from './config';

const useRemoteConfig = () => {
  const {getValue} = remoteConfig;
  const getConfigValue = (key: string) => {
    const value = getValue(key);
    return value.asString();
  };
  return {getConfigValue};
};

export default useRemoteConfig;
