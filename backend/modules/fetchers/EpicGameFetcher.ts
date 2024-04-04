import { GameFetcher, GameResponse } from "../fetchers/GameFetcher";
import { buildEpicGamesURL } from "../../utils/helpers";
import axios from "axios";

export class EpicGameFetcher implements GameFetcher {
  getGamesInPromotion = async (): Promise<GameResponse[]> => {
    return []

  }
  
  private fetchGamesInPromotion = async () => {
    const url = buildEpicGamesURL();

    const response = await axios.get(url);
    const games = response.data.data.Catalog.searchStore.elements;

  }

  getPromotionsByDeveloper = async (): Promise<GameResponse[]> => {
    return []

  }


  getFreeGames = async (): Promise<GameResponse[]> => {
    return []
  }

}
