import { GameClicksUseCase } from '../../domain/usecases/GameClicksUseCase';
import { GameClicksRepository } from '../repositories/GameClicksRepository';

export const gameClicksUseCase = new GameClicksUseCase(
  new GameClicksRepository()
);
