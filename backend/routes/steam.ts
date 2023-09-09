import { Router } from "express";

import steam_controller from "../controllers/steam_controller.js";

const steamRouter = Router();

steamRouter.get("/promotions", steam_controller.getPromotions.bind(steam_controller));

export default steamRouter;
