import express from "express";
import { getAllFoods, getFoodByid, createFood, updateFood, deleteFood, } from "../controllers/food.controller.js";
const foodsRouter = express.Router();
foodsRouter.get("/", getAllFoods); // GET all foods
foodsRouter.post("/", createFood); // POST create new food
foodsRouter.get("/:foodId", getFoodByid); // GET single food
foodsRouter.patch("/:foodId", updateFood); // PATCH update food
foodsRouter.delete("/:foodId", deleteFood); // DELETE food
export default foodsRouter;
