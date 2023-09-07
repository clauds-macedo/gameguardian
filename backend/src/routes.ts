import { Router } from "express";

import specialsRouter from "../routes/specials";
import epicRouter from "../routes/epic";
import steamRouter from "../routes/steam";

const routes = Router();

routes.use("/epic", epicRouter);
routes.use("/steam", steamRouter);
routes.use("/specials", specialsRouter);

export default routes;