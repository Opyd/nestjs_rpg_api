import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { v4 as uuidv4 } from 'uuid';

export type PlaceDocument = Place & Document;

@Schema({ timestamps: false })
export class Place {
  @Prop({
    type: String,
    default: function genUUID() {
      return uuidv4();
    },
  })
  _id: string;

  @Prop({
    required: true,
    unique: true,
  })
  name: string;

  @Prop({
    required: true,
  })
  type: string;

  @Prop({
    required: false,
  })
  details: string;

  @Prop({
    required: false,
  })
  imageLink: string;
}

export const PlaceSchema = SchemaFactory.createForClass(Place);
