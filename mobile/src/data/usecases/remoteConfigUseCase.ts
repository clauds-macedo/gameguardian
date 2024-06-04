import { RemoteConfigUseCase } from '../../domain/usecases/RemoteConfigUseCase';
import { RemoteConfigRepository } from '../repositories/RemoteConfigRepository';

export const remoteConfigUseCase = new RemoteConfigUseCase(
  new RemoteConfigRepository()
);
