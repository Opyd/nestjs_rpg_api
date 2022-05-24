import { IsString, IsUrl } from 'class-validator';
import mongoose from 'mongoose';

export class UpdateItemDto {
  @IsString()
  name: string;
  @IsString()
  quantity: string;

  @IsString()
  type: string;

  location: mongoose.Schema.Types.ObjectId[];

  @IsString()
  weight: string;

  @IsUrl()
  iconLink: string;
}
