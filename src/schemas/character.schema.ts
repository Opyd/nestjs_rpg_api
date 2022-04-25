import mongoose from "mongoose"

export const CharacterSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    type: {
        required: true,
        type: String,
    },
    races: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'race'
      }],
    location:  String,
    description: String,
    age: String,
    sex: String,
    alive: {
        default: true,
        type: Boolean,
    },
    icon: String,    
}, {timestamps: false});