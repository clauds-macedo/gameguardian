import { Request, Response } from "express";
import fs from "fs";

import { SteamGameFetcher } from "../modules/fetchers/SteamGameFetcher";
import { SteamResponseFormatter } from "../modules/responseFormatters/SteamResponseFormatter";
import { JsonFiles } from "../utils/jsonFiles";

class SteamController {
  private fetcher = new SteamGameFetcher();

  async getPromotions(req: Request, res: Response) {
    try {
      const data = fs.readFileSync("data/" + JsonFiles.SteamPromotions, "utf8");
      const games = JSON.parse(data);
      return res.status(200).json(games);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Failed to get games in promotion." });
    }
  }

  async getPromotionsByDeveloper(req: Request, res: Response) {
    const { developer } = req.params;

    try {
      const games = await this.fetcher.getPromotionsByDeveloper(
        new SteamResponseFormatter(),
        developer
      );

      return res.status(200).json(games);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ error: `Failed to get games from ${developer}` });
    }
  }
}

export default new SteamController();
