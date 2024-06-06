export class RemoteConfigValue {
  constructor(
    private remoteConfigValue: string | number | Record<string, unknown>
  ) {}

  getRemoteConfigValue(): string | number | Record<string, unknown> {
    return this.remoteConfigValue;
  }
}
