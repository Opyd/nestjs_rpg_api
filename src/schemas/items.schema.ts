import mongoose from "mongoose";


export const ItemsSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    quantity: {
        default: 1,
        required: true,
        type: Number
    },
    type: {
        type: String,
        required: true,
    },
    weight: Number,
    icon: {
        type: String,
        required: true
    },
    places: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'place'
      }],
});