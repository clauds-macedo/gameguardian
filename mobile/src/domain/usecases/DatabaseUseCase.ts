import type { IDatabaseRepository } from '../repositories/IDatabaseRepository';

export class DatabaseUseCase<T> {
  constructor(private databaseRepository: IDatabaseRepository<T>) {}

  async create(id: string, data: Record<string, any>): Promise<void> {
    this.databaseRepository.create(id, data);
  }

  async read(id: string): Promise<T | undefined> {
    return this.databaseRepository.read(id);
  }

  async update(id: string, data: Partial<T>): Promise<void> {
    return this.databaseRepository.update(id, data);
  }

  async delete(id: string): Promise<void> {
    this.databaseRepository.delete(id);
  }

  async list(): Promise<T[]> {
    return this.databaseRepository.list();
  }
}
