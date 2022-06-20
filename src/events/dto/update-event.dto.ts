import { IsString, IsUrl } from 'class-validator';
import mongoose from 'mongoose';

export class UpdateEventDto {
  @IsString()
  name: string;

  @IsString()
  type: string;

  characters: mongoose.Schema.Types.ObjectId[];

  locations: mongoose.Schema.Types.ObjectId[];

  @IsString()
  description: string;

}
