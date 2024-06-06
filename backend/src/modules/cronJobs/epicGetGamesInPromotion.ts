import { CronJob } from "cron";
import { EpicGameFetcher } from "../fetchers/EpicGameFetcher";
import { EpicDiscountResponseFormatter } from "../responseFormatters/EpicDiscountResponseFormatter";
import { GameResponse } from "../../utils/types";
import { writeJson } from "../../utils/writeJson";
import { JsonFiles } from "../../utils/jsonFiles";

const getGamesInPromotion = async () => {
  let games: GameResponse[] = [];

  try {
    games = await new EpicGameFetcher()
      .getGamesInPromotion(new EpicDiscountResponseFormatter());
  } catch (e) {
    return;
  }

  writeJson(games, JsonFiles.EpicPromotions);
}

export const EpicGetGamesInPromotion = CronJob.from({
  cronTime: "* * 8 * * *",
  onTick: getGamesInPromotion,
  timeZone: "America/Maceio",
  runOnInit: true,
});
