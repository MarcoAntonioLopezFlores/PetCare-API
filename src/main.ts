import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/petcare');
  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(AppModule.port);
}
bootstrap();
