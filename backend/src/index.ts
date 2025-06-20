import express from "express";
import mongoose from "mongoose";
import foodsRouter from "./routes/food.route.js";
import foodOrderRouter from "./routes/foodOrder.route.js";

mongoose.connect(
  "mongodb+srv://xassuld:Hasaahassuld_1@cluster0.kie4vix.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

const server = express();
server.use(express.json());

server.use("/food", foodsRouter);
server.use("/food-order", foodOrderRouter);

server.get("/", (_req, res) => {
  res.send("Hello, Welcome to the menu");
});

server.listen(3000, () => {
  console.log("Server aslaa");
});
