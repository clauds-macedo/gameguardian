import { platforms } from "../../utils/platforms";
import { getHTMLDocumentByUrl } from "../../utils/getHTMLDocumentByUrl";

const getGamesBySteam = async () => {
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

export const getGamesInPromotion = async (platform: platforms): Promise<string[]> => {
  switch (platform) {
    case platforms.STEAM:
      return await getGamesBySteam();

    default:
      break;
  }

  return [];
};
