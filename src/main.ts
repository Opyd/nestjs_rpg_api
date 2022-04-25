import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UserSchema } from './schemas/user.schema';
import mongoose from "mongoose";


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3100);
  const user = mongoose.model('user', UserSchema);
  const maciek = await user.create({
    name: "Maciek",
    email : "chujkurwa",
    password: "dupa", 

  })
}
bootstrap();
