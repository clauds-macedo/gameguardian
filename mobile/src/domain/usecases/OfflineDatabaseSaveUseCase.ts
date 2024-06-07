import type { OfflineDatabaseDTO } from '../dtos/offline-database.dto';
import type { IOfflineDatabaseRepository } from '../repositories/IOfflineDatabaseRepository';

export class OfflineDatabaseSaveUseCase {
  constructor(private offlineDatabaseRepository: IOfflineDatabaseRepository) {}

  save(data: OfflineDatabaseDTO) {
    this.offlineDatabaseRepository.save(data);
  }
}
