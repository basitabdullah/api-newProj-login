import express from "express";
import router from "./routes/user.js";
import { connectDatabase } from "./database/database.js";
import { config } from "dotenv";

export const server = express();

//midddleware
//using routes
server.use(express.json());
server.use(router);


config({
  path : "./database/config.env"
})

connectDatabase();

server.listen(5000, () => {
  console.log("Server is working");
});

server.get("/", (req, res) => {
  res.send("Working");
});
