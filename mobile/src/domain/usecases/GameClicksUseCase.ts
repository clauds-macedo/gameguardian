import { IGameClicksDTO } from '../dtos/game-clicks.dto';
import { IGameClicksRepository } from '../repositories/IGameClicksRepository';

export class GameClicksUseCase {
  constructor(private gameClicksRepository: IGameClicksRepository) {}

  async register(requestDTO: IGameClicksDTO) {
    return this.gameClicksRepository.register(requestDTO);
  }
}
