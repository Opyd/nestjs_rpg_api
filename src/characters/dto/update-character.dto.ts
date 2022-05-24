import { IsString, IsUrl } from 'class-validator';
import mongoose from 'mongoose';

export class UpdateCharacterDto {
  @IsString()
  name: string;

  @IsString()
  type: string;

  race: mongoose.Schema.Types.ObjectId;

  location: mongoose.Schema.Types.ObjectId;

  items: mongoose.Schema.Types.ObjectId[];

  @IsString()
  description: string;

  @IsString()
  age: string;

  @IsString()
  sex: string;

  @IsString()
  alive: string;

  @IsUrl()
  iconLink: string;
}
