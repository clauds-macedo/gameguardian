import { getGamesInPromotion } from "../modules/services/get_games_in_promotion";
import { Request, Response } from "express";
import axios from "axios";
import { getGamesInPromotionByDevSteam } from "../modules/services/get_games_by_dev_steam";

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
  private async buildGameResponse(id: string): Promise<GameResponse> {
    const { data } = await axios.get(gameDetailsPage + id);

    return {
      title: data[id].data.name,
      description: data[id].data.detailed_description,
      screenshots: data[id].data.screenshots,
    };
  }

  private async fetchGames(ids: string[]): Promise<GameResponse[]> {
    const games = await Promise.all(
      ids.map((id) => this.buildGameResponse(id))
    );

    return games;
  }

  async getPromotions(req: Request, res: Response) {
    try {
      const ids = await getGamesInPromotion("steam");

      const games: GameResponse[] = await this.fetchGames(ids);
      return res.status(200).json(games);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ error: "Failed to get games in promotion." });
    }
  }

  async getPromotionsByDeveloper(req: Request, res: Response) {
    const devName: string = req.params.developer;

    try {
      const ids = await getGamesInPromotionByDevSteam(devName);

      const games: GameResponse[] = await this.fetchGames(ids);

      return res.status(200).json(games);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ error: `Failed to get games from ${devName}` });
    }
  }
}

export default new SteamController();
