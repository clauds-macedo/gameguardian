import { CronJob } from "cron";
import { EpicGameFetcher } from "../fetchers/EpicGameFetcher";
import { EpicFreeResponseFormatter } from "../responseFormatters/EpicFreeResponseFormatter";
import { GameResponse } from "../../utils/types";
import { writeJson } from "../../utils/writeJson";
import { JsonFiles } from "../../utils/jsonFiles";

const getGamesInPromotion = async () => {
  let games: GameResponse[] = [];

  try {
    games = await new EpicGameFetcher()
      .getFreeGames(new EpicFreeResponseFormatter());
  } catch (e) {
    return;
  }

  writeJson(games, JsonFiles.EpicFree);
}

export const EpicGetFreeGames = CronJob.from({
  cronTime: "* * 8 * * *",
  onTick: getGamesInPromotion,
  timeZone: "America/Maceio",
  runOnInit: true,
});
