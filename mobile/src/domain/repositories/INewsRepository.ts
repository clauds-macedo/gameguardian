import type { NewsDTO } from '../dtos/news.dto';
import type { News } from '../entities/news';

export interface INewsRepository {
  execute: (url: NewsDTO) => Promise<News[]>;
}
