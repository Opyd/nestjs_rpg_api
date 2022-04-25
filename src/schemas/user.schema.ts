import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    name: {
      required: true,
      unique: true,
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password:{
      type: String,
      required: true,
    },
    active: {
      default: false,
      type: Boolean
    },
    campaigns: [{
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'campaign'
    }]
  }, {timestamps: true});
