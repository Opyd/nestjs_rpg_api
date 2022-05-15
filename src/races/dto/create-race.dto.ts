import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRaceDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  icon: string;

  @IsString()
  description: string;
}
