import { IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator';
import mongoose from 'mongoose';

export class CreateCharacterDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsNotEmpty()
  race: mongoose.Schema.Types.ObjectId;

  @IsNotEmpty()
  location: mongoose.Schema.Types.ObjectId;

  @IsString()
  description: string;

  @IsString()
  age: string;

  @IsString()
  sex: string;

  @IsString()
  alive: string;

  @IsUrl()
  @IsNotEmpty()
  iconLink: string;
}
