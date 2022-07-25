import { Router } from "express";
import { getCustomers, getCustomerById ,postCustomers, putCustomerById } from "../controllers/customerControllers.js";
import { validatePostCustomer, validateGetCostumerById, validatePutCostumerById} from "../middlewares/customerMiddlewares.js";

const customerRouter = Router();

customerRouter.get('/customers', getCustomers);
customerRouter.get('/customers/:id', validateGetCostumerById ,getCustomerById);
customerRouter.post('/customers', validatePostCustomer ,postCustomers);
customerRouter.put('/customers/:id', validatePutCostumerById ,putCustomerById);
export default customerRouter;