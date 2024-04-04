import { exec } from "./exec";
import * as cheerio from "cheerio";
import axios from "axios";
import { getHTMLDocumentByUrl } from "../../utils/getHTMLDocumentByUrl";

interface IError {
  error: string;
}

const URL = "https://store.steampowered.com/developer/"

export const getGamesInPromotionByDevSteam = async (
  dev: string
): Promise<string[]> => {
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
};
