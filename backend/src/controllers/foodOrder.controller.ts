import { Request, Response } from "express";
import { FoodOrder } from "../models/foodOrder.model.js";

export const getAllFoodOrders = async (req: Request, res: Response) => {
  try {
    const orders = await FoodOrder.find().populate("foodOrderItems.food");
    res.json({ success: true, data: orders });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

export const getFoodOrderById = async (req: Request, res: Response) => {
  try {
    const order = await FoodOrder.findById(req.params.orderId).populate(
      "foodOrderItems.food"
    );
    if (!order) {
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });
    }
    res.json({ success: true, data: order });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

export const getFoodOrdersByUser = async (req: Request, res: Response) => {
  try {
    const orders = await FoodOrder.find({ user: req.params.userId }).populate(
      "foodOrderItems.food"
    );
    res.json({ success: true, data: orders });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

export const createFoodOrder = async (req: Request, res: Response) => {
  try {
    const order = await FoodOrder.create(req.body);
    res.json({ success: true, data: order });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};

export const updateFoodOrderStatus = async (req: Request, res: Response) => {
  try {
    const updated = await FoodOrder.findByIdAndUpdate(
      req.params.orderId,
      { status: req.body.status },
      { new: true }
    );
    res.json({ success: true, data: updated });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};

export const deleteFoodOrder = async (req: Request, res: Response) => {
  try {
    const deleted = await FoodOrder.findByIdAndDelete(req.params.orderId);
    if (!deleted) {
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });
    }
    res.json({ success: true, message: "Order deleted" });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};
