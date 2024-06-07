import type { OfflineDatabaseValueTypeParams } from '../dtos/offline-database.dto';
import type { IOfflineDatabaseRepository } from '../repositories/IOfflineDatabaseRepository';

export class OfflineDatabaseReadUseCase {
  constructor(private offlineDatabaseRepository: IOfflineDatabaseRepository) {}

  execute(key: string, as: OfflineDatabaseValueTypeParams) {
    this.offlineDatabaseRepository.read(key, as);
  }
}
