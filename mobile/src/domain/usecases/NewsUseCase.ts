import type { NewsDTO } from '../dtos/news.dto';
import type { INewsRepository } from '../repositories/INewsRepository';

export class NewsUseCase implements INewsRepository {
  constructor(private newsRepository: INewsRepository) {}

  async execute(requestDTO: NewsDTO) {
    return this.newsRepository.execute({ url: requestDTO.url });
  }
}
