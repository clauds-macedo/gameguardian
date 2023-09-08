import axios from "axios";
import { load } from "cheerio";
import { Response, Request } from "express";

class NewsController {
  private async fetchNewsFromUrl(url: string): Promise<any[]> {
    const { data } = await axios.get(url);
    const $ = load(data);
    const newsList: any[] = [];

    $("article").each((_, element) => {
      const title = $(element).find("h2").text();
      const link = $(element).find("a").first().attr("href");
      const image = $(element).find("figure").find("img").attr("data-lazy-src") || $(element).find("figure").find("img").attr("src");

      if (title) {
        newsList.push({
          title,
          link,
          image,
        });
      }
    });

    return newsList;
  }

  private async fetchAllNewsFromUrls(): Promise<any[]> {
    // pegar apenas as notícias mais recentes
    const urls = [
        "https://www.adrenaline.com.br/games/",
        "https://www.adrenaline.com.br/games/page/2",
    ];

    const allNews = await Promise.all(urls.map(url => this.fetchNewsFromUrl(url)));
    return allNews.flat();
}

  async getAdrenalineNews(req: Request, res: Response): Promise<void> {
    try {
      const news = await this.fetchAllNewsFromUrls();

      res.json(news);
    } catch (error) {
      res.status(500).json({ error: `Failed to fetch news, ${error}` });
    }
  }
}

export default new NewsController();
