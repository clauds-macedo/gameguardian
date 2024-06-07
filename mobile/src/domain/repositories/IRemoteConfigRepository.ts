import type { RemoteConfigAdapter } from '@/data/repositories/adapters/RemoteConfigAdapter';
import type { RemoteConfigKeys } from '@/infra/global/types';

export interface IRemoteConfigRepository {
  establishRemoteConfigConnection: () => Promise<void>;
  getValue: (key: RemoteConfigKeys) => Promise<RemoteConfigAdapter>;
}
