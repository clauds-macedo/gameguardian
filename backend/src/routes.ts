import { Router } from "express";

import epicRouter from "../routes/epic";
import newsRouter from "../routes/news";
import specialsRouter from "../routes/specials";
import steamRouter from "../routes/steam";

const routes = Router();

routes.use("/epic", epicRouter);
routes.use("/steam", steamRouter);
routes.use("/specials", specialsRouter);
routes.use("/news", newsRouter);

export default routes;
