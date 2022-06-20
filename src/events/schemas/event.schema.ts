import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Character } from 'src/characters/schemas/character.schema';
import { Place } from 'src/places/schemas/places.schema';

export type EventDocument = Event & Document;

@Schema({ timestamps: false })
export class Event {
  @Prop({
    required: true,
  })
  name: string;

  @Prop({
    required: true,
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Place' }],
  })
  locations: Place[];

  @Prop({
    required: true,
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Character' }],
  })
  characters: Character[];

  @Prop({
    required: true,
    enum: ['positive', 'negative', 'neutral'],
  })
  type: string;

  @Prop({
    required: true,
  })
  description: string;

}

export const EventSchema = SchemaFactory.createForClass(Event);
