import type { RemoteConfigKeys } from '@infra/global/types';
import type { IRemoteConfigRepository } from '../repositories/IRemoteConfigRepository';

export class RemoteConfigUseCase {
  constructor(private remoteConfigRepository: IRemoteConfigRepository) {}

  async establishRemoteConfigConnection() {
    await this.remoteConfigRepository.establishRemoteConfigConnection();
  }

  getValue(key: RemoteConfigKeys) {
    return this.remoteConfigRepository.getValue(key);
  }
}
