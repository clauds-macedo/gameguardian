import { Request, Response } from 'express'
import fs from "fs";

import { JsonFiles } from '../utils/jsonFiles.js';

class EpicController {
  freeGames = async (req: Request, res: Response) => {
    try {
      const data = fs.readFileSync("data/" + JsonFiles.EpicFree, "utf8");
      const games = JSON.parse(data);
      return res.status(200).json(games);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar os jogos grátis." });
    }
  };

  discountedGames = async (req: Request, res: Response) => {
    try {
      const data = fs.readFileSync("data/" + JsonFiles.EpicPromotions, "utf8");
      const games = JSON.parse(data);
      return res.status(200).json(games);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Erro ao buscar os jogos em desconto." });
    }
  };
}

export default new EpicController();
