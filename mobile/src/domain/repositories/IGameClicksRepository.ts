import type { IGameClicksDTO } from '../dtos/game-clicks.dto';

export interface IGameClicksRepository {
  register: (requestDTO: IGameClicksDTO) => Promise<void>;
}
