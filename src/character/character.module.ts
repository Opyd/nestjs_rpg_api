import { Module } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CharacterController } from './character.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Character, CharacterSchema } from './schemas/characters.schema';
import { Race, RaceSchema } from 'src/races/schemas/races.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Character.name, schema: CharacterSchema },
      { name: Race.name, schema: RaceSchema },
    ]),
  ],
  controllers: [CharacterController],
  providers: [CharactersService],
})
export class CharacterModule {}
