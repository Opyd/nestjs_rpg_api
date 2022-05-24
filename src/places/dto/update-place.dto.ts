import { IsString } from 'class-validator';

export class UpdatePlaceDto {
  @IsString()
  name: string;

  @IsString()
  imageLink: string;

  @IsString()
  type: string;

  @IsString()
  details: string;
}
