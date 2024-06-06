import type { RemoteConfigKeys } from '@/infra/global/types';
import type { RemoteConfigValue } from '../entities/remote-config';

export interface IRemoteConfigRepository {
  establishRemoteConfigConnection: () => Promise<void>;
  getValue: (key: RemoteConfigKeys) => Promise<RemoteConfigValue>;
}
