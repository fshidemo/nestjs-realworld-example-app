import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule, { cors: true });
  // app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();