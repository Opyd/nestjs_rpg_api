import { IsNotEmpty, IsString, IsUrl } from 'class-validator';
import mongoose from 'mongoose';

export class CreateItemDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  quantity: string;

  @IsNotEmpty()
  type: mongoose.Schema.Types.ObjectId[];

  @IsString()
  weight: string;

  @IsUrl()
  @IsNotEmpty()
  iconLink: string;
}
