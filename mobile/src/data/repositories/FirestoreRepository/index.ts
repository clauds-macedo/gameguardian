import firestore from '@react-native-firebase/firestore';

export class FirestoreRepository<T> {
  constructor(private collectionPath: string) {}

  private getCollectionRef() {
    return firestore().collection(this.collectionPath);
  }

  protected async create(id: string, data: Record<string, any>): Promise<void> {
    await this.getCollectionRef().doc(id).set(data);
  }

  protected async read(id: string): Promise<T | undefined> {
    const documentSnapshot = await this.getCollectionRef().doc(id).get();
    if (!documentSnapshot.exists) {
      this.create(id, {});
      return undefined;
    }
    return documentSnapshot.data() as T;
  }

  protected async update(id: string, data: Partial<T>): Promise<void> {
    await this.getCollectionRef().doc(id).update(data);
  }

  protected async delete(id: string): Promise<void> {
    await this.getCollectionRef().doc(id).delete();
  }

  protected async list(): Promise<T[]> {
    const querySnapshot = await this.getCollectionRef().get();
    return querySnapshot.docs.map((doc) => doc.data() as T);
  }
}
