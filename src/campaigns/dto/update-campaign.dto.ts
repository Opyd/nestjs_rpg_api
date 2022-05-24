import { IsString, IsUrl } from 'class-validator';
import mongoose from 'mongoose';

export class UpdateCampaignDto {
  @IsString()
  name: string;

  owner: mongoose.Schema.Types.ObjectId;

  locations: mongoose.Schema.Types.ObjectId[];

  characters: mongoose.Schema.Types.ObjectId[];

  events: mongoose.Schema.Types.ObjectId[];

  items: mongoose.Schema.Types.ObjectId[];

  @IsString()
  description: string;

  @IsUrl()
  iconLink: string;
}
