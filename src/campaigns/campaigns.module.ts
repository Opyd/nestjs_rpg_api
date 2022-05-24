import { Module } from '@nestjs/common';
import { CampaignsService } from './campaigns.service';
import { CampaignsController } from './campaigns.controller';
import { Campaign, CampaignSchema } from './schemas/campaign.schema';
import { Place, PlaceSchema } from 'src/places/schemas/places.schema';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Character,
  CharacterSchema,
} from 'src/characters/schemas/character.schema';
import { EventSchema } from 'src/events/schemas/event.schema';
import { Item, ItemSchema } from 'src/items/schemas/item.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Campaign.name, schema: CampaignSchema },
      { name: Place.name, schema: PlaceSchema },
      { name: Character.name, schema: CharacterSchema },
      { name: Event.name, schema: EventSchema },
      { name: Item.name, schema: ItemSchema },
    ]),
  ],
  controllers: [CampaignsController],
  providers: [CampaignsService],
})
export class CampaignsModule {}
