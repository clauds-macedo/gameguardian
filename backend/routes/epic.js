import { Router } from "express";

import epicController from "../controllers/epic_controller.js";

const epicRouter = Router();

epicRouter.get("/freeGames", epicController.fetchFreeGames);
epicRouter.get("/specials", epicController.getDiscountedGames);

export default epicRouter;