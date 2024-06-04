import type { RemoteConfigKeys } from '../../global/types';
import type { RemoteConfigValue } from '../entities/remote-config';

export interface IRemoteConfigRepository {
  establishRemoteConfigConnection: () => Promise<void>;
  getValue: (key: RemoteConfigKeys) => Promise<RemoteConfigValue>;
}
