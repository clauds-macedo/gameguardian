import { GameFetcher } from "./GameFetcher";
import { getHTMLDocumentByUrl } from "../../utils/getHTMLDocumentByUrl";
import axios from "axios";
import {  ResponseFormatter } from "../responseFormatters/ResponseFormatter";

const gameDetailsPage =
  "https://store.steampowered.com/api/appdetails?cc=br&l=pt&appids=";

export class SteamGameFetcher implements GameFetcher {
  getGamesInPromotion = async (formatter: ResponseFormatter) => {
    const ids = await this.getGamesIdsInPromotion();
    const responses = await Promise.all(
      ids.map((id) => axios.get(gameDetailsPage + id))
    );

    return formatter.format(responses);
  }

  private getGamesIdsInPromotion = async () => {
    const URL = "https://store.steampowered.com/search/?ignore_preferences=1&specials=1&ndl=1";
    const appIdPattern = /\/app\/(\d+)/;
    const ids: string[] = [];

    const $ = await getHTMLDocumentByUrl(URL);
    const promoGamesWithApp = $('a[href*="/app/"]');

    promoGamesWithApp.each((_, element) => { 
      const href = $(element).attr("href");
      if (href) {
        const match = href.match(appIdPattern);
        if (match) { 
          ids.push(match[1]);
        }
      }
    })

    return ids;
  }

  getPromotionsByDeveloper = async (formatter: ResponseFormatter, developer: string) => {
    const ids = await this.getGamesIdsInPromotionByDev(developer);
    const responses = await Promise.all(
      ids.map((id) => axios.get(gameDetailsPage + id))
    );

    return formatter.format(responses);
  }

  private getGamesIdsInPromotionByDev = async (dev: string) => {
    const URL = "https://store.steampowered.com/developer/"
    const idRegex = /\/app\/(\d+)/;
    const idList: string[] = [];

    const $ = await getHTMLDocumentByUrl(URL + dev);

    const promotionsContainer = $("#discounted_0");
    promotionsContainer.find("a").each((_, element) => {
      const href = $(element).attr("href");
      if (href) {
        const match = href.match(idRegex);
        if (match)
        idList.push(match[1]);
      }
    })

    return idList;
  }

  getFreeGames = async ()  => {
    return []
  }

}
