import { Router } from "express";
import { categoriesRouter } from "./categoriesRouter.js";
import { customersRouter } from "./customersRouter.js";
import { gamesRouter } from "./gamesRouter.js";
import { rentsRouter } from "./rentsRouter.js";

const router = Router();

router.use(categoriesRouter);
router.use(customersRouter);
router.use(gamesRouter);
router.use(rentsRouter);

export default router;