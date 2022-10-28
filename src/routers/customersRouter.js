import { Router } from "express";
import { checkSchema } from "../middlewares/checkSchema.js";
import { customerSchema } from "../schemas/customerSchema.js";
import { addElement, getElements, getElementById, updateElement } from "../controllers/customersController.js";

export const customersRouter = Router();

customersRouter.post('/customers', checkSchema(customerSchema), addElement);
customersRouter.get('/customers', getElements);
customersRouter.get('/customers/:id', getElementById)
customersRouter.put('/customers/:id', checkSchema(customerSchema), updateElement)
