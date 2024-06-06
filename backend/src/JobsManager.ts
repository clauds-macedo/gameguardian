import { CronJob } from "cron"

import { SteamGetGamesInPromotion } from "./modules/cronJobs/steamGetGamesInPromotion"
import { EpicGetGamesInPromotion } from "./modules/cronJobs/epicGetGamesInPromotion"
import { EpicGetFreeGames } from "./modules/cronJobs/epicGetFreeGames";

export class JobsManager {
  private jobs: CronJob[];

  constructor() {
    this.jobs = [
      SteamGetGamesInPromotion,
      EpicGetGamesInPromotion,
      EpicGetFreeGames,
    ];
  }

  run() {
    this.jobs.forEach((job) => job.start());
  }
}
