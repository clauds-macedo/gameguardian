import { CronJob } from "cron";
import { SteamGameFetcher } from "../fetchers/SteamGameFetcher";
import { SteamResponseFormatter } from "../responseFormatters/SteamResponseFormatter";
import { GameResponse } from "../../utils/types";
import { writeJson } from "../../utils/writeJson";
import { JsonFiles } from "../../utils/jsonFiles";

const getGamesInPromotion = async () => {
  let games: GameResponse[] = [];

  try {
    games = await new SteamGameFetcher()
      .getGamesInPromotion(new SteamResponseFormatter());
  } catch (e) {
    return;
  }

  writeJson(games, JsonFiles.SteamPromotions);
}

export const SteamGetGamesInPromotion = CronJob.from({
  cronTime: "* * 8 * * *",
  onTick: getGamesInPromotion,
  timeZone: "America/Maceio",
  runOnInit: true,
});
