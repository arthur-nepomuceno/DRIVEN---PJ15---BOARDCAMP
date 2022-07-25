import { Router } from "express";
import { postCustomer } from "../controllers/customerControllers.js";
import validatePostCustomer from "../middlewares/customerMiddleware.js";

const customerRouter = Router();

customerRouter.post('/customers', validatePostCustomer ,postCustomer);

export default customerRouter;