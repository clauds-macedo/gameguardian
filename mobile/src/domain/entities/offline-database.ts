export class OfflineDatabase {
  public hasValidKey(key: string) {
    if (key[0] === '@') {
      return true;
    }
    throw new Error('Key should initialize with @');
  }
}
