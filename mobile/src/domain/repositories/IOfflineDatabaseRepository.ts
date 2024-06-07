import type {
  OfflineDatabaseDTO,
  OfflineDatabaseValueType,
  OfflineDatabaseValueTypeParams,
} from '../dtos/offline-database.dto';

export interface IOfflineDatabaseRepository {
  save: (data: OfflineDatabaseDTO) => void;
  delete: (key: string) => void;
  read: (
    key: string,
    as: OfflineDatabaseValueTypeParams
  ) => OfflineDatabaseValueType | undefined;
}
