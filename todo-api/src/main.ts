import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const origins = (process.env.CORS_ORIGIN || 'http://localhost:3000,http://localhost:3002').split(',');
  app.enableCors({ origin: origins });
  await app.listen(3001);
}

bootstrap();
