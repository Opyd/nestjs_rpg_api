import mongoose from "mongoose";


export const CampaignSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user'
  },
  places: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'place'
  }],
  characters: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'character'
  }],
  events : [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'event'
  }],
  items : [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'item'
  }]
  
  
}, {timestamps: true})