import { NewsUseCase } from '../../domain/usecases/NewsUseCase';
import { NewsRepository } from '../repositories/NewsRepository';

export const newsUseCase = new NewsUseCase(new NewsRepository());
