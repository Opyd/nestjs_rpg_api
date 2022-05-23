import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Race } from 'src/races/schemas/races.schema';
import mongoose, { Model } from 'mongoose';
import { Place } from 'src/places/schemas/places.schema';

export type CharacterDocument = Character & Document;

@Schema({ timestamps: false })
export class Character {
  @Prop({
    required: true,
  })
  name: string;

  @Prop({
    required: true,
  })
  type: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Race' })
  race: Race;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Place' })
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
