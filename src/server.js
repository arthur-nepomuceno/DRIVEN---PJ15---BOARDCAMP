import express, { json } from 'express';
import 'express-async-errors';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routers/router.js';
import { errorHandler } from "./middlewares/errorHandler.js";

dotenv.config();

const server = express();

server.use(cors());
server.use(json());
server.use(router);
server.use(errorHandler);

const PORT = 4000 || process.env.PORT;

server.listen(PORT, () => { console.log(`Server running on port ${PORT}.`) })