import { IGameClicksDTO } from '../../../domain/dtos/game-clicks.dto';
import { GameClicks } from '../../../domain/entities/game-clicks';
import { IGameClicksRepository } from '../../../domain/repositories/IGameClicksRepository';
import { currentDate } from '../../../utils/current-date';
import { FirestoreRepository } from '../FirestoreRepository';

export class GameClicksRepository implements IGameClicksRepository {
  private firestoreRepository: FirestoreRepository<GameClicks>;

  constructor() {
    this.firestoreRepository = new FirestoreRepository<GameClicks>('games');
  }

  async register(requestDTO: IGameClicksDTO): Promise<void> {
    const { doc } = requestDTO;
    const gameClicks = await this.firestoreRepository.read(currentDate);
    const currentClicks = gameClicks?.[doc]?.clicks || 0;

    await this.firestoreRepository.update(currentDate, {
      [doc]: {
        clicks: currentClicks + 1,
      },
    });
  }
}
