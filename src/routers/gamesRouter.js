import { Router } from "express";
import { checkSchema } from "../middlewares/checkSchema.js";
import { gameSchema } from "../schemas/gameSchema.js"
import { createGame, readGames } from "../controllers/gamesController.js";

export const gamesRouter = Router();

gamesRouter.post('/games', checkSchema(gameSchema), createGame)
gamesRouter.get('/games', readGames);