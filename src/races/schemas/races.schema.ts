import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type RaceDocument = Race & Document;

@Schema({ timestamps: false })
export class Race {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  iconLink: string;

  @Prop()
  description: string;
}

export const RaceSchema = SchemaFactory.createForClass(Race);
