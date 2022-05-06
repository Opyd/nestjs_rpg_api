import { ForbiddenException, Injectable } from '@nestjs/common';
import { LoginDto, RegisterDto } from './dto';
import * as argon from 'argon2';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async signup(dto: RegisterDto) {
    try {
      const hash = await argon.hash(dto.password);

      const user = await this.userService.create({
        name: dto.name,
        email: dto.email,
        password: hash,
      });

      return this.signToken(user._id, user.email);
    } catch (error) {
      //błąd mongodb o duplikatach (z docsów)
      if (error.code == 11000) {
        //zwróci 403 i forbidden
        throw new ForbiddenException('Credentials taken');
      }
      throw error;
    }
  }

  async signin(dto: LoginDto) {
    //znalezenie użytkownika
    const user = await this.userService.findOne(dto.email);

    if (!user) {
      throw new ForbiddenException('Credentials incorrect');
    }
    //porównuje hash usera z hasłem podanym
    const pwMatches = await argon.verify(user.password, dto.password);

    if (!pwMatches) {
      throw new ForbiddenException('Credentials incorrect');
    }
    return this.signToken(user._id, user.email);
  }

  async signToken(userId: string, email: string): Promise<object> {
    const payload = {
      sub: userId,
      email: email,
    };
    const token = await this.jwt.signAsync(payload, {
      expiresIn: '15m',
      secret: this.config.get('JWT_SECRET'),
    });
    return {
      access_token: token,
    };
  }
}
