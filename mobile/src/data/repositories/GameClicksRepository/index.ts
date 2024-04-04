import { IGameClicksDTO } from '../../../domain/dtos/game-clicks.dto';
import { GameClicks } from '../../../domain/entities/game-clicks';
import { IGameClicksRepository } from '../../../domain/repositories/IGameClicksRepository';
import { FirestoreRepository } from '../FirestoreRepository';

export class GameClicksRepository implements IGameClicksRepository {
  private firestoreRepository: FirestoreRepository<GameClicks>;

  constructor() {
    this.firestoreRepository = new FirestoreRepository<GameClicks>('games');
  }

  async register(requestDTO: IGameClicksDTO): Promise<void> {
    const { doc } = requestDTO;
    const gameClicks = await this.firestoreRepository.read(doc);

    let newClicks = 1;

    if (gameClicks) {
      newClicks = gameClicks.clicks + 1;
    }

    await this.firestoreRepository.create(doc, {
      id: doc,
      clicks: newClicks,
    });
  }
}
