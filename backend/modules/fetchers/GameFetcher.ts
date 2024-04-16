import { GameResponse } from "../../utils/types";
import { ResponseFormatter } from "../responseFormatters/ResponseFormatter";

export interface GameFetcher {
  getFreeGames: (
    formatter: ResponseFormatter
  ) => Promise<GameResponse[]>;
  getGamesInPromotion: (
    formatter: ResponseFormatter
  ) => Promise<GameResponse[]>;
  getPromotionsByDeveloper: (
    formatter: ResponseFormatter, 
    developer: string) 
  => Promise<GameResponse[]>
}

