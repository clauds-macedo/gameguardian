import type {
  OfflineDatabaseDTO,
  OfflineDatabaseValueType,
  OfflineDatabaseValueTypeParams,
} from '@/domain/dtos/offline-database.dto';
import { OfflineDatabase } from '@/domain/entities/offline-database';
import type { MMKV } from 'react-native-mmkv';

export class MMKVAdapter extends OfflineDatabase {
  constructor(private adaptee: MMKV) {
    super();
  }

  private valueRetrievers: Record<OfflineDatabaseValueTypeParams, Function> = {
    boolean: (key: string) => this.adaptee.getBoolean(key),
    number: (key: string) => this.adaptee.getNumber(key),
    string: (key: string) => this.adaptee.getString(key),
  };

  getValue(
    key: string,
    value: OfflineDatabaseValueTypeParams
  ): OfflineDatabaseValueType | undefined {
    const retrieveValue = this.valueRetrievers[value];
    if (!retrieveValue) {
      return undefined;
    }
    return retrieveValue(key);
  }

  delete(key: string) {
    this.adaptee.delete(key);
  }

  save({ key, value }: OfflineDatabaseDTO) {
    if (!this.hasValidKey(key)) {
      return;
    }
    this.adaptee.set(key, value);
  }
}
