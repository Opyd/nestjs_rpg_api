import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://szymekk:test1234@testing-database.lto2w.mongodb.net/rpg',
    ),
  ],
  controllers: [AppController],
  providers: [AppService], 
}) 
export class AppModule {}
