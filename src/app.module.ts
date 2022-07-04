import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RacesModule } from './races/races.module';
import { PlacesModule } from './places/places.module';
import { CharacterModule } from './characters/characters.module';
import { ItemsModule } from './items/items.module';
import { EventsModule } from './events/events.module';
import { CampaignsModule } from './campaigns/campaigns.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    MongooseModule.forRoot(
      '', //your local mongodb instance
    ),
    ConfigModule.forRoot({}),
    RacesModule,
    PlacesModule,
    CharacterModule,
    ItemsModule,
    EventsModule,
    CampaignsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
