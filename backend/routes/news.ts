import { Router } from "express";

import news_controller from "../controllers/news_controller";

const newsRouter = Router();

newsRouter.get("/adrenaline", news_controller.getAdrenalineNews.bind(news_controller));

export default newsRouter;
