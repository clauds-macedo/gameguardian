import { getGamesInPromotion } from "../modules/services/get_games_in_promotion";
import { Request, Response } from "express";
import axios from "axios";

const gameDetailsPage =
  "https://store.steampowered.com/api/appdetails?cc=br&l=pt&appids=";

interface GameResponse {
  title: string;
  description: string;
  screenshots: {
    id: number;
    path_thumbnail: string;
    path_full: string;
  }[];
}

class SteamController {
  fetchPromotions = async (req: Request, res: Response) => {
    try {
      const ids = await getGamesInPromotion("steam");

      const response: GameResponse[] = [];
      for (const id of ids) {
        const respData = (await axios.get(gameDetailsPage + id)).data;

        if (respData[id].success) {
          const { data } = respData[id];
          response.push({
            title: data.name,
            description: data.detailed_description,
            screenshots: data.screenshots,
          });
        }
      }

      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao requisitar à Steam." });
    }
  };
}

export default new SteamController();
