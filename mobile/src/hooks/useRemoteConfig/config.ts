import remote from '@react-native-firebase/remote-config';

export const remoteConfig = {
  fetch: () => remote().fetch(),
  getValue: (key: string) => remote().getValue(key),
  getAll: () => remote().getAll(),
};
