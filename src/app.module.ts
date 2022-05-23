import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RacesModule } from './races/races.module';
import { PlacesModule } from './places/places.module';
import { CharacterModule } from './character/character.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://bebzon:kOBeewjnS7LHX5Lg@cluster0.e5qqc.mongodb.net/rpg?retryWrites=true&w=majority',
    ),
    ConfigModule.forRoot({}),
    RacesModule,
    PlacesModule,
    CharacterModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
