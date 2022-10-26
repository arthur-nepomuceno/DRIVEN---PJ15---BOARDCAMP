import express from "express";
import dotenv from "dotenv";
dotenv.config();

const server = express();

const PORT = 4000 || process.env.PORT;

server.listen(PORT, () => {console.log(`Server running on port ${PORT}.`)})