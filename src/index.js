import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import categoryRouter from "./routers/categoryRoutes.js";
import gameRouter from "./routers/gameRoutes.js";
dotenv.config();

const server = express();

server.use(cors());
server.use(express.json());

server.use(categoryRouter);
server.use(gameRouter);

const PORT = 4000 || process.env.PORT;
server.listen(PORT, () => {console.log(`Server online at port ${PORT}`)});