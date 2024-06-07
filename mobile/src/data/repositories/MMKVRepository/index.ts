import type {
  OfflineDatabaseDTO,
  OfflineDatabaseValueTypeParams,
} from '@/domain/dtos/offline-database.dto';
import type { IOfflineDatabaseRepository } from '@/domain/repositories/IOfflineDatabaseRepository';
import { MMKV } from 'react-native-mmkv';
import { MMKVAdapter } from '../adapters/MMKVAdapter';

export class MMKVRepository implements IOfflineDatabaseRepository {
  private MMKVStorage = new MMKV();

  private MMKVAdapter = new MMKVAdapter(this.MMKVStorage);

  read(key: string, as: OfflineDatabaseValueTypeParams) {
    return this.MMKVAdapter.getValue(key, as);
  }

  delete(key: string) {
    this.MMKVAdapter.delete(key);
  }

  save(data: OfflineDatabaseDTO) {
    this.MMKVAdapter.save(data);
  }
}
