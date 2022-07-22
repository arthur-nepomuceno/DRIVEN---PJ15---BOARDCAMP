import express from "express";
import cors from 'cors';
import categoryRouter from "./routers/categoryRoutes.js";

const server = express();
server.use(cors());
server.use(express.json());

server.use(categoryRouter);

const PORT = 4000;
server.listen(PORT, () => {console.log(`Server online at port ${PORT}`)});