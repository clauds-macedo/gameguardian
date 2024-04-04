import firestore from '@react-native-firebase/firestore';
import { IGameClicksDTO } from '../../../domain/dtos/game-clicks.dto';
import { GameClicks } from '../../../domain/entities/game-clicks';
import { IGameClicksRepository } from '../../../domain/repositories/IGameClicksRepository';
import { currentDate } from '../../../utils/current-date';

export class GameClicksRepository implements IGameClicksRepository {
  private getGamesCollection() {
    return firestore().collection('games').doc(currentDate);
  }

  private async getClicksFromDatabase(
    requestDTO: IGameClicksDTO
  ): Promise<GameClicks> {
    const { doc: docName } = requestDTO;
    const collection = this.getGamesCollection();
    try {
      const docValue = (await collection.get()).data();
      if (!docValue) {
        return { clicks: 1 };
      }
      const { clicks } = docValue[docName];
      return { clicks };
    } catch (error) {
      console.error('Failed to get clicks from database:', error);
      throw error;
    }
  }

  async register(requestDTO: IGameClicksDTO) {
    const { doc } = requestDTO;
    const clicks = await this.getClicksFromDatabase(requestDTO);
    console.log(clicks, 'clicks');
    const collection = this.getGamesCollection();
    console.log(collection, 'collcetion');
    console.log(new firestore.FieldPath(doc));
    await collection.update(new firestore.FieldPath(doc), clicks);
  }
}
