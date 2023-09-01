import remote from '@react-native-firebase/remote-config';

export const remoteConfig = {
  getValue: (key: string) => remote().getValue(key),
};
