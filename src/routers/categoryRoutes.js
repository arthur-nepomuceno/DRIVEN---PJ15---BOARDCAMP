import { Router } from "express";
import { getCategories, postCategories } from "../controllers/categoryControllers.js";
import { validadePostCategory } from "../middlewares/validatePostCategory.js";

const categoryRouter = Router();

categoryRouter.get('/categories', getCategories);
categoryRouter.post('/categories', validadePostCategory, postCategories);

export default categoryRouter;