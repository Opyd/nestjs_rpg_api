import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EventSchema } from './schemas/event.schema';
import { Place, PlaceSchema } from 'src/places/schemas/places.schema';
import {
  Character,
  CharacterSchema,
} from 'src/characters/schemas/character.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Event.name, schema: EventSchema },
      { name: Place.name, schema: PlaceSchema },
      { name: Character.name, schema: CharacterSchema },
    ]),
  ],
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule {}
