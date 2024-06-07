import { RemoteConfigValue } from '@/domain/entities/remote-config';
import type { FirebaseRemoteConfigTypes } from '@react-native-firebase/remote-config';

export interface IRemoteConfigValueTransformer {
  asString(): string;
  asArray(): unknown[];
}

export class RemoteConfigAdapter extends RemoteConfigValue {
  constructor(adaptee: FirebaseRemoteConfigTypes.ConfigValue) {
    super(adaptee.asString());
  }

  private remoteConfigObjectToArray(
    objectToTransform: Record<string, unknown>
  ): unknown[] {
    return Object.keys(objectToTransform).map((key) => objectToTransform[key]);
  }

  asString(): string {
    const value = this.getRemoteConfigValue();
    if (typeof value === 'string') {
      return value;
    }
    return JSON.stringify(value);
  }

  asArray(): unknown[] {
    const value = this.getRemoteConfigValue();
    if (typeof value === 'object' && value !== null) {
      return this.remoteConfigObjectToArray(value);
    }
    if (typeof value === 'string') {
      try {
        const parsedRemoteConfigString = JSON.parse(value);
        if (
          typeof parsedRemoteConfigString === 'object' &&
          parsedRemoteConfigString !== null
        ) {
          return this.remoteConfigObjectToArray(parsedRemoteConfigString);
        }
      } catch (error) {
        return [];
      }
    }
    return [];
  }
}
