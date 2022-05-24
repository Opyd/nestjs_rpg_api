import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Place } from 'src/places/schemas/places.schema';

export type ItemDocument = Item & Document;

@Schema({ timestamps: false })
export class Item {
  @Prop({
    required: true,
  })
  name: string;

  @Prop({
    default: 1,
    required: true,
  })
  quantity: string;

  @Prop({
    required: true,
  })
  type: string;

  @Prop()
  weight: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Place' }] })
  location: Place[];

  @Prop({
    required: false,
  })
  imageLink: string;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
