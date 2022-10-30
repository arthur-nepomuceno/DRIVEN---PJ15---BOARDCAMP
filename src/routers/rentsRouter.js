import { Router } from "express";
import { checkSchema } from "../middlewares/checkSchema.js";
import { rentSchema } from "../schemas/rentSchema.js";
import { addElement, getElements, updateElement, deleteElement } from "../controllers/rentsController.js";

export const rentsRouter = Router();

rentsRouter.post('/rents', checkSchema(rentSchema), addElement);
rentsRouter.get('/rents', getElements);
rentsRouter.post('/rents/:id/return', updateElement);
rentsRouter.delete('/rents/:id', deleteElement)