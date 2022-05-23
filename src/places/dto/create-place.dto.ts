import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreatePlaceDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  imageLink: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsString()
  details: string;
}
