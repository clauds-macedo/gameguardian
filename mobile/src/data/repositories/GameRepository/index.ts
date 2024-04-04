import type { GameDTO } from '../../../domain/dtos/game.dto';
import type { Game } from '../../../domain/entities/game';
import type { IGameRepository } from '../../../domain/repositories/IGameRepository';
import instance from '../../../services/axios';

export class GameRepository implements IGameRepository {
  async execute(requestDTO: GameDTO) {
    const games = (await instance.get<Game[]>(requestDTO.url)).data;
    return games;
  }
}
