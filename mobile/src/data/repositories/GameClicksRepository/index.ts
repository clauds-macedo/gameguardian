import type { IGameClicksDTO } from '@domain/dtos/game-clicks.dto';
import type { GameClicks } from '@domain/entities/game-clicks';
import type { IGameClicksRepository } from '@domain/repositories/IGameClicksRepository';
import { currentDate } from '@utils/current-date';
import { DatabaseRepository } from '../DatabaseRepository';

export class GameClicksRepository
  extends DatabaseRepository<GameClicks>
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
