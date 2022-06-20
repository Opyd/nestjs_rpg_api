import { IsNotEmpty, IsString, IsUrl } from 'class-validator';
import mongoose from 'mongoose';

export class CreateItemDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  quantity: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsNotEmpty()
  location: mongoose.Schema.Types.ObjectId[];

  @IsString()
  weight: string;

  @IsString()
  @IsNotEmpty()
  imageLink: string;
}
