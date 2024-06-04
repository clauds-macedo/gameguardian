import type { NewsDTO } from '@domain/dtos/news.dto';
import type { News } from '@domain/entities/news';
import type { INewsRepository } from '@domain/repositories/INewsRepository';
import instance from '@services/axios';

export class NewsRepository implements INewsRepository {
  async execute(requestDTO: NewsDTO) {
    const newsData = (await instance.get<News[]>(`/news/${requestDTO.url}`))
      .data;
    return newsData;
  }
}
