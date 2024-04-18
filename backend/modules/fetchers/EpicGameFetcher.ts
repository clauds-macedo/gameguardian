import { GameFetcher } from "../fetchers/GameFetcher";
import { buildEpicGamesURL } from "../../utils/helpers";
import axios from "axios";
import { ResponseFormatter } from "../responseFormatters/ResponseFormatter";

export class EpicGameFetcher implements GameFetcher {
  getGamesInPromotion = async (formatter: ResponseFormatter) => {
    const url = buildEpicGamesURL();
    const response = await axios.get(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "Insomnia/2023.5.6",
      }
    });

    return await formatter.format(response);
  }

  getFreeGames = async (formatter: ResponseFormatter) => {
    const url = "https://store-site-backend-static.ak.epicgames.com/freeGamesPromotions"
    const response = await axios.get(url);

    return await formatter.format(response);
  }

  getPromotionsByDeveloper = async () => {
    return []

  }


}
