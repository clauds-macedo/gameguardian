export class RemoteConfigValue {
  constructor(
    private remoteConfigValue: string | number | Record<string, unknown>
  ) {}

  protected getRemoteConfigValue(): string | number | Record<string, unknown> {
    return this.remoteConfigValue;
  }
}
