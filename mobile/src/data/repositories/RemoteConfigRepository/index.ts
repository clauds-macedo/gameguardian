import { RemoteConfigValue } from '@domain/entities/remote-config';
import type { IRemoteConfigRepository } from '@domain/repositories/IRemoteConfigRepository';
import { remoteConfig } from '@infra/config/remote-config';
import type { RemoteConfigKeys } from '@infra/global/types';
import { RemoteConfigAdapter } from '../adapters/RemoteConfigAdapter';

export class RemoteConfigRepository implements IRemoteConfigRepository {
  async establishRemoteConfigConnection() {
    await remoteConfig.fetchAndActivate();
  }

  async getValue(key: RemoteConfigKeys) {
    const remoteConfigValue = remoteConfig.getValue(key);
    return new RemoteConfigAdapter(remoteConfigValue);
  }
}

// {_source: "djasiojdioasj", metadata: j8912dj892jd8921jsd}