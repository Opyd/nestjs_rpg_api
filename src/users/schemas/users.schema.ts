import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type UserDocument = User & Document;
@Schema({ timestamps: true })
export class User {
  @Prop({
    type: String,
    default: function genUUID() {
      return uuidv4();
    },
  })
  _id: string;

  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, unique: true })
  password: string;

  @Prop({ default: false })
  active: boolean;
  //jeszcze nie mamy kampani
  // @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Campaign' }] })
  // campaign: Campaign[];
}

export const UserSchema = SchemaFactory.createForClass(User);
