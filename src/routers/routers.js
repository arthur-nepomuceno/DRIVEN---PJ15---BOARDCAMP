import { Router } from "express";
import { categoriesRouter } from "./categoriesRouter";
import { clientsRouter } from "./clientsRouter";
import { gamesRouter } from "./gamesRouter";
import { rentsRouter } from "./rentsRouter";

export const routers = Router();

routers.use(categoriesRouter);
routers.use(clientsRouter);
routers.use(gamesRouter);
routers.use(rentsRouter);