import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransferResponceInterceptorInterceptor } from './transfer-responce-interceptor/transfer-responce-interceptor.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new TransferResponceInterceptorInterceptor());

  await app.listen(3000);
}
bootstrap();
