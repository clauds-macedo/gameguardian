import { Request, Response } from 'express'
import { EpicGameFetcher } from "../modules/fetchers/EpicGameFetcher.js";
import { EpicFreeResponseFormatter } from "../modules/responseFormatters/EpicFreeResponseFormatter.js";
import { EpicDiscountResponseFormatter } from "../modules/responseFormatters/EpicDiscountResponseFormatter.js";

class EpicController {
  private fetcher = new EpicGameFetcher();

  freeGames = async (req: Request, res: Response) => {
    try {
      const games = await this.fetcher.getFreeGames(new EpicFreeResponseFormatter());
      return res.status(200).json(games);
    } catch (error) {
      console.error("Error fetching free games:", error);
      res.status(500).json({ error: "Erro ao buscar os jogos grátis." });
    }
  };

  discountedGames = async (req: Request, res: Response) => {
    try {
      const games = await this.fetcher.getGamesInPromotion(new EpicDiscountResponseFormatter());
      return res.status(200).json(games);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Erro ao buscar os jogos em desconto." });
    }
  };
}

export default new EpicController();
