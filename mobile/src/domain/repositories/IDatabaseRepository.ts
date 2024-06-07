export interface IDatabaseRepository<T> {
  create(id: string, data: Record<string, any>): Promise<void>;
  read(id: string): Promise<T | undefined>;
  update(id: string, data: Partial<T>): Promise<void>;
  delete(id: string): Promise<void>;
  list(): Promise<T[]>;
}
