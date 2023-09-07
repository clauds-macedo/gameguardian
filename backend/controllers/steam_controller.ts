import { parsePage } from "../modules/services/parse_page";
import { Request, Response } from "express";
import axios from "axios";

const steamPromotionsPage =
  "https://store.steampowered.com/search/?ignore_preferences=1&specials=1&ndl=1";

const gameDetailsPage =
  "https://store.steampowered.com/api/appdetails?cc=br&l=pt&appids=";

interface gameResponse {
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
    const platform = "steam";

    const ids = await parsePage(platform, steamPromotionsPage);

    const response: gameResponse[] = [];
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
  };
}

export default new SteamController();
