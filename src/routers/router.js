import { Router } from "express";
import { categoriesRouter } from "./categoriesRouter.js";
import { clientsRouter } from "./clientsRouter.js";
import { gamesRouter } from "./gamesRouter.js";
import { rentsRouter } from "./rentsRouter.js";

const router = Router();

router.use(categoriesRouter);
router.use(clientsRouter);
router.use(gamesRouter);
router.use(rentsRouter);

export default router;