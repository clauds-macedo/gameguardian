import { GameDTO } from '../dtos/game.dto';
import { IGameRepository } from '../repositories/IGameRepository';

export class GameUseCase {
  constructor(private gameRepository: IGameRepository) {}

  async execute(requestDTO: GameDTO) {
    return this.gameRepository.execute({ url: requestDTO.url });
  }
}
