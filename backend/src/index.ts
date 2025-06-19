import express from "express";
import foodsRouter from "./routes/food.route.js";
import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://xassuld:Hasaahassuld_1@cluster0.kie4vix.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

const { Schema, model } = mongoose;

const food = new Schema({
  foodName: String,
  price: Number,
  image: String,
  ingredients: String,
  createdAt: Date,
  updatedAt: Date,
});

export const Food = mongoose.models.Food || model("Food", food);

const server = express();
server.use(express.json());

const port = 3000;

server.use("/food", foodsRouter);

server.get("/", (_request, response) => {
  response.send("Hello Dashka");
});

server.listen(port, () => {
  console.log("Server aslaa");
});
