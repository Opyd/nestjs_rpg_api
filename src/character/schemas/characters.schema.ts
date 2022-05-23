import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Race } from 'src/races/schemas/races.schema';
import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { Place } from 'src/places/schemas/places.schema';

export type CharacterDocument = Character & Document;

@Schema({ timestamps: false })
export class Character {
  @Prop({
    type: String,
    default: function genUUID() {
      return uuidv4();
    },
  })
  _id: string;

  @Prop({
    required: true,
  })
  name: string;

  @Prop({
    required: true,
  })
  type: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'race' })
  race: Race;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'place' })
  location: Place;

  @Prop()
  description: string;

  @Prop()
  age: string;

  @Prop()
  sex: string;

  @Prop()
  alive: string;

  @Prop({
    required: false,
  })
  imageLink: string;
}

export const CharacterSchema = SchemaFactory.createForClass(Character);
