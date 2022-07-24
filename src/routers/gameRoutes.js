import { Router } from "express";
import { getGames, postGames } from "../controllers/gameControllers.js";
import { validadePostGame } from "../middlewares/gameMiddleware.js";

const gameRouter = Router();

gameRouter.get('/games', getGames);
gameRouter.post('/games', validadePostGame, postGames);

export default gameRouter;