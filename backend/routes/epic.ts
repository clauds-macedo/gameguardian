import { Router } from "express";
import epicController from "../controllers/epic_controller.js";

const epicRouter = Router();

epicRouter.get("/free", epicController.freeGames);
epicRouter.get("/promotions", epicController.discountedGames);

export default epicRouter;
