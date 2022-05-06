import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://bebzon:kOBeewjnS7LHX5Lg@cluster0.e5qqc.mongodb.net/rpg?retryWrites=true&w=majority',
    ),
    ConfigModule.forRoot({}),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
