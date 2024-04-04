import { GameUseCase } from '../../domain/usecases/GameUseCase';
import { GameRepository } from '../repositories/GameRepository';

export const gamesUseCase = new GameUseCase(new GameRepository());
