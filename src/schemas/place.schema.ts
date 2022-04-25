import mongoose from "mongoose";

export const PlaceSchema = new mongoose.Schema({
    name: {
      required: true,
      unique: true,
      type: String,
    },

    type: {
        required: true,
        unique: true,
        type: String,
      },

    details: {
        required: false,
        unique: true,
        type: String,
      },
    image: String,
    });