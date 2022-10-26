import { Router } from "express";
import { checkSchema } from "../middlewares/checkSchema.js";
import { categorySchema } from "../schemas/categorySchema.js"
import { createCategory, readCategories} from "../controllers/categoriesController.js";

export const categoriesRouter = Router();

categoriesRouter.post('/category', checkSchema(categorySchema), createCategory);
categoriesRouter.get('/categories', readCategories);
