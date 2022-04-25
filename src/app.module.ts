import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://pajrat:test1234@testing-database.lto2w.mongodb.net/tes?authSource=admin&replicaSet=atlas-nwety8-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
