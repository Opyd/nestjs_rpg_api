import { IsString } from 'class-validator';

export class UpdateRaceDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  iconLink: string;
}
