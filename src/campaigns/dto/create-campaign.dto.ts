import { IsNotEmpty, IsString, IsUrl } from 'class-validator';
import mongoose from 'mongoose';

export class CreateCampaignDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  owner: mongoose.Schema.Types.ObjectId;

  @IsNotEmpty()
  locations: mongoose.Schema.Types.ObjectId[];

  @IsNotEmpty()
  characters: mongoose.Schema.Types.ObjectId[];

  @IsNotEmpty()
  events: mongoose.Schema.Types.ObjectId[];

  @IsNotEmpty()
  items: mongoose.Schema.Types.ObjectId[];

  @IsString()
  description: string;

  @IsString()
  imageLink: string;
}
