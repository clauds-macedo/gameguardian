import { RemoteConfigValue } from '../../../domain/entities/remote-config';
import { IRemoteConfigRepository } from '../../../domain/repositories/IRemoteConfigRepository';
import { remoteConfig } from '../../../infra/config/remote-config';
import { RemoteConfigKeys } from '../../../infra/global/types';

export class RemoteConfigRepository implements IRemoteConfigRepository {
  async establishRemoteConfigConnection() {
    await remoteConfig.fetchAndActivate();
  }

  async getValue(key: RemoteConfigKeys) {
    const remoteConfigValue = remoteConfig.getValue(key);
    return new RemoteConfigValue(remoteConfigValue.asString());
  }
}
