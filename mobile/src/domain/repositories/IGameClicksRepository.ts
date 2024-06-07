import type { IGameClicksDTO } from '../dtos/game-clicks.dto';
import type { GameClicks } from '../entities/game-clicks';

export interface IGameClicksRepository {
  register: (requestDTO: IGameClicksDTO) => Promise<void>;
  readClicks: () => Promise<GameClicks | undefined>;
}
