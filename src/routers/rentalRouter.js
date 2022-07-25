import { Router } from "express";
import { getRentals, postRentals } from "../controllers/rentalControllers.js";
import { validatePostRental } from "../middlewares/rentalMiddlewares.js";

const rentalRouter = Router();

rentalRouter.get('/rentals', getRentals);
rentalRouter.post('/rentals', validatePostRental ,postRentals);


export default rentalRouter;