import { OfflineDatabaseDeleteUseCase } from '@/domain/usecases/OfflineDatabaseDeleteUseCase';
import { OfflineDatabaseReadUseCase } from '@/domain/usecases/OfflineDatabaseReadUseCase';
import { OfflineDatabaseSaveUseCase } from '@/domain/usecases/OfflineDatabaseSaveUseCase';
import { MMKVRepository } from '../repositories/MMKVRepository';

export const offlineDatabaseDeleteUseCase = new OfflineDatabaseDeleteUseCase(
  new MMKVRepository()
);

export const offlineDatabaseReadUseCase = new OfflineDatabaseReadUseCase(
  new MMKVRepository()
);

export const offlineDatabaseSaveUseCase = new OfflineDatabaseSaveUseCase(
  new MMKVRepository()
);
