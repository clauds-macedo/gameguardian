export type OfflineDatabaseValueType = string | boolean | number;
export type OfflineDatabaseValueTypeParams = 'string' | 'boolean' | 'number';

export interface OfflineDatabaseDTO {
  key: string;
  value: OfflineDatabaseValueType;
}
