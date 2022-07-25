import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import categoryRouter from './routers/categoryRouter.js';
import gameRouter from './routers/gameRouter.js';
import customerRouter from './routers/customerRouter.js';

dotenv.config();

const server = express();

server.use(cors(), express.json());

server.use(categoryRouter);
server.use(gameRouter);
server.use(customerRouter)

const PORT = 4000 || process.env.PORT;
server.listen(PORT, () => {console.log(`Server online at port ${PORT}`)});