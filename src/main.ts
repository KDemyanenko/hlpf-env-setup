import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { TrimPipe } from './common/pipes/trim.pipe'; // Імпортуємо наш Pipe

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Реєструємо глобальні пайпи
  app.useGlobalPipes(
    new TrimPipe(), // ПЕРШИМ (обрізаємо пробіли)
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen(3000);
  console.log(`Application is running on: http://localhost:3000`);
}
bootstrap();