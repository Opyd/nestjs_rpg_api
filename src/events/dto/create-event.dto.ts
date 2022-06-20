import { IsNotEmpty, IsString, IsUrl } from 'class-validator';
import mongoose from 'mongoose';

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsNotEmpty()
  characters: mongoose.Schema.Types.ObjectId[];

  @IsNotEmpty()
  locations: mongoose.Schema.Types.ObjectId[];

  @IsString()
  description: string;
}
