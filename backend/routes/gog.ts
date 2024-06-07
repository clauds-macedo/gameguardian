import { Router } from "express";

import news_controller from "../controllers/news_controller";

const gogRouter = Router();

gogRouter.get("/adrenaline", news_controller.getAdrenalineNews.bind(news_controller));

export default gogRouter;
