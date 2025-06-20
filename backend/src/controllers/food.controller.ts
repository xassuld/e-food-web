import { Request, Response } from "express";
import { Food } from "../models/food.model.js";

export const getAllFoods = async (request: Request, response: Response) => {
  try {
    const foods = await Food.find();

    response.json({
      success: true,
      data: foods,
    });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};

export const getFoodByid = (request: Request, response: Response) => {
  response.send("food/:foodId Get huselt irlee");
};

export const createFood = async (request: Request, response: Response) => {
  try {
    const food = request.body;
    const createdFood = await Food.create(food);

    response.json({
      success: true,
      data: createdFood,
    });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};

export const updateFood = (request: Request, response: Response) => {
  response.send("food/:foodId Patch huselt irlee");
};

export const deleteFood = async (request: Request, response: Response) => {
  try {
    const deleted = await Food.findByIdAndDelete(request.params.foodId);
    if (!deleted) {
      return response
        .status(404)
        .json({ success: false, message: "Food not found" });
    }
    response.json({ success: true, message: "Food deleted" });
  } catch (error) {
    response.status(400).json({ success: false, error });
  }
};
