import mongoose from "mongoose";
const { Schema, model } = mongoose;
const foodOrderItem = new Schema({
    food: {
        type: Schema.Types.ObjectId,
        ref: "Food",
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
});
const foodOrder = new Schema({
    user: Schema.Types.ObjectId,
    totalPrice: Number,
    foodOrderItems: {
        type: [foodOrderItem],
        required: true,
    },
    status: {
        type: String,
        enum: ["PENDING", "CANCELED", "DELIVERED"],
        default: "PENDING",
    },
    createdAt: Date,
    updatedAt: Date,
});
export const FoodOrder = model("FoodOrder", foodOrder);
