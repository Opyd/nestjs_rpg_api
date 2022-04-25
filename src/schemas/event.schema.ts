import mongoose from "mongoose";



export const EventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  place: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'place',
    required: true
  },
  characters: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'character',
  }],
  type: {
    type: String,
    required: true,
    enum: ['positive', 'negative', 'neutral']
  },
  description: {
    type:String,
    required: true
  }
})