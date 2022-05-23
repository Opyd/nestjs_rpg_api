import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Race } from 'src/races/schemas/races.schema';
import { v4 as uuidv4 } from 'uuid';

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

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'race' })
  owner: Race;

  @Prop({
    required: false,
  })
  imageLink: string;
}

export const PlaceSchema = SchemaFactory.createForClass(Place);
