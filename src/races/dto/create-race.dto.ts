import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateRaceDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsUrl()
  @IsNotEmpty()
  iconLink: string;

  @IsString()
  description: string;
}
