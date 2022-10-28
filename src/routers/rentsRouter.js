import { Router } from "express";
import { checkSchema } from "../middlewares/checkSchema.js";
import { rentSchema } from "../schemas/rentSchema.js";
import { addElement } from "../controllers/rentsController.js";

export const rentsRouter = Router();

rentsRouter.post('/rents', checkSchema(rentSchema), addElement);