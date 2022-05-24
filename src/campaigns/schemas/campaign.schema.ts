import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Character } from 'src/characters/schemas/character.schema';
import { Item } from 'src/items/schemas/item.schema';
import { Place } from 'src/places/schemas/places.schema';
import { User } from 'src/users/schemas/users.schema';

export type CampaignDocument = Campaign & Document;

@Schema({ timestamps: false })
export class Campaign {
  @Prop({
    required: true,
  })
  name: string;

  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  })
  owner: User;

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

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }] })
  events: Event[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }] })
  items: Item[];

  @Prop({
    required: true,
  })
  description: string;

  @Prop({
    required: false,
  })
  imageLink: string;
}

export const CampaignSchema = SchemaFactory.createForClass(Campaign);
