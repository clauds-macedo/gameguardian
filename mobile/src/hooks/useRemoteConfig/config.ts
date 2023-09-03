import remote from '@react-native-firebase/remote-config';

export const remoteConfig = {
  fetchAndActivate: () => remote().fetchAndActivate(),
  fetch: () => remote().fetch(),
  getValue: (key: string) => remote().getValue(key),
  getAll: () => remote().getAll(),
};
