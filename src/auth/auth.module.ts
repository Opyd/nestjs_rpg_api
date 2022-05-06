import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategy';

@Module({
  imports: [UsersModule, JwtModule.register({}), ConfigModule], // importuje UserModule ze względu na wykorzystanie Serwisu do logowania i tworzenia
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
