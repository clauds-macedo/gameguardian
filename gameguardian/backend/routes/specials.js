import { Router } from "express";

import generalController from "../controllers/general_controller.js";

const specialsRouter = Router();

specialsRouter.get("/:platform/:page", generalController.fetchPrices);

export default specialsRouter;