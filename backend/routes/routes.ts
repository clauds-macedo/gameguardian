import { Router } from "express";

import specialsRouter from "./specials.js";
import epicRouter from "./epic.js";
import steamRouter from "./steam.js";

const routes = Router();

routes.use("/epic", epicRouter);
routes.use("/steam", steamRouter);
routes.use("/specials", specialsRouter);

export default routes;