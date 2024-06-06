import { Router } from "express";

import specialsRouter from "./routes/specials";
import epicRouter from "./routes/epic";
import steamRouter from "./routes/steam";
import newsRouter from "./routes/news";

const routes = Router();

routes.use("/epic", epicRouter);
routes.use("/steam", steamRouter);
routes.use("/specials", specialsRouter);
routes.use("/news", newsRouter)

export default routes;
