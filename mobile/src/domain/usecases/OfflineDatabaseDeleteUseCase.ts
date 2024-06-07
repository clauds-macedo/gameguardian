import type { IOfflineDatabaseRepository } from '../repositories/IOfflineDatabaseRepository';

export class OfflineDatabaseDeleteUseCase {
  constructor(private offlineDatabaseRepository: IOfflineDatabaseRepository) {}

  delete(key: string) {
    this.offlineDatabaseRepository.delete(key);
  }
}
