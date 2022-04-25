import mongoose from "mongoose";

export const RacesSchema = new mongoose.Schema({
  name: {
      required: true,
      type: String
  },
  icon: String,
})