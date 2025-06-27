import { Request, Response } from "express";
import { FoodCategory } from "../models/foodCategory.model.js";

export const createCategory = async (req: Request, res: Response) => {
  try {
    const category = await FoodCategory.create(req.body);
    res.json({ success: true, data: category });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};

export const getAllCategories = async (_req: Request, res: Response) => {
  try {
    const categories = await FoodCategory.find();
    res.json({ success: true, data: categories });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const category = await FoodCategory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!category) {
      return res.status(404).json({ success: false, message: "Not found" });
    }
    res.json({ success: true, data: category });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const deleted = await FoodCategory.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: "Not found" });
    }
    res.json({ success: true, message: "Category deleted" });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};
