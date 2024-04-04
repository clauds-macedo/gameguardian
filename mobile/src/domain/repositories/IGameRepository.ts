import { GameDTO } from '../dtos/game.dto';
import type { Game } from '../entities/game';

export interface IGameRepository {
  execute: (endpoint: GameDTO) => Promise<Game[]>;
}
