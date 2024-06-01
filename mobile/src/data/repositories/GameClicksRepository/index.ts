import { IGameClicksDTO } from '../../../domain/dtos/game-clicks.dto';
import { GameClicks } from '../../../domain/entities/game-clicks';
import { IGameClicksRepository } from '../../../domain/repositories/IGameClicksRepository';
import { currentDate } from '../../../utils/current-date';
import { FirestoreRepository } from '../FirestoreRepository';

export class GameClicksRepository
  extends FirestoreRepository<GameClicks>
  implements IGameClicksRepository
{
  async register(requestDTO: IGameClicksDTO): Promise<void> {
    const { doc } = requestDTO;
    const gameClicks = await this.read(currentDate);
    const currentClicks = gameClicks?.[doc]?.clicks || 0;

    await this.update(currentDate, {
      [doc]: {
        clicks: currentClicks + 1,
      },
    });
  }
}
