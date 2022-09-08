import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log(
    process.env.DB_HOST, 
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    process.env.DB_NAME)
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000, () => {
    console.log('App is running on http://localhost:3000');
  });
}
bootstrap();
