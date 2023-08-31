import { Router } from "express";

import generalController from "../controllers/general_controller.js";

const steamRouter = Router();

steamRouter.get("/:page", generalController.fetchPrices);

export default steamRouter;
