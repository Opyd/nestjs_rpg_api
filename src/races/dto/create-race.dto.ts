import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRaceDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  iconLink: string;

  @IsString()
  description: string;
}
