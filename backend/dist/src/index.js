import express from "express";
import foodsRouter from "./routes/food.route.js";
import foodOrderRouter from "./routes/foodOrder.route.js";
import categoryRouter from "./routes/foodCategory.route.js";
import router from "./routes/user.route.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
mongoose.connect(process.env.MONGO_URL);
const server = express();
server.use(express.json());
const port = process.env.PORT;
server.use("/food", foodsRouter);
server.use("/food-order", foodOrderRouter);
server.use("/food-category", categoryRouter);
server.use("/user", router);
server.get("/", (_req, res) => {
    res.send("Hello, Welcome to the menu");
});
server.listen(port, () => {
    console.log(`Server aslaa: ${port}`);
});
