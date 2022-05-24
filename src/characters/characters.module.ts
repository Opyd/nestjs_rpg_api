import { Module } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CharacterController } from './characters.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Character, CharacterSchema } from './schemas/character.schema';
import { Race, RaceSchema } from 'src/races/schemas/races.schema';
import { Place, PlaceSchema } from 'src/places/schemas/places.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Character.name, schema: CharacterSchema },
      { name: Race.name, schema: RaceSchema },
      { name: Place.name, schema: PlaceSchema },
    ]),
  ],
  controllers: [CharacterController],
  providers: [CharactersService],
})
export class CharacterModule {}
