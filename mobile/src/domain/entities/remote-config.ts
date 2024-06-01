export class RemoteConfigValue {
  constructor(
    private remoteConfigValue: string | number | Record<string, unknown>
  ) {}

  private remoteConfigObjectToArray(
    objectToTransform: Record<string, unknown>
  ) {
    return Object.keys(objectToTransform).map((key) => objectToTransform[key]);
  }

  asString(): string {
    if (typeof this.remoteConfigValue === 'string') {
      return this.remoteConfigValue;
    }
    return JSON.stringify(this.remoteConfigValue);
  }

  asArray() {
    if (
      typeof this.remoteConfigValue === 'object' &&
      this.remoteConfigValue !== null
    ) {
      return this.remoteConfigObjectToArray(this.remoteConfigValue);
    }
    if (typeof this.remoteConfigValue === 'string') {
      const parsedRemoteConfigString = JSON.parse(this.remoteConfigValue);
      return this.remoteConfigObjectToArray(parsedRemoteConfigString);
    }
    return [];
  }
}
