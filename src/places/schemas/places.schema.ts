import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type PlaceDocument = Place & Document;

@Schema({ timestamps: false })
export class Place {
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
