import { Prop, Schema } from '@nestjs/mongoose';
import { v4 as uuidv4 } from 'uuid';

export type RaceDocument = Race & Document;

@Schema({ timestamps: false })
export class Race {
  @Prop({
    type: String,
    default: function genUUID() {
      return uuidv4();
    },
  })
  _id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  iconLink: string;

  @Prop()
  description: string;
}
