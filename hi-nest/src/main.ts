import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // pipe 추가 - 유효성 검사용 파이프
  app.useGlobalPipes(
    // 우리가 사용할 파이프를 넘겨줌
    new ValidationPipe({
      whitelist: true,

      // 이상한 데이터를 차단 ex)"property aaa should not exist",
      forbidNonWhitelisted: true,

      // 우리가 원하는 실제 타입으로 변환해줌
      transform: true,
    }), // 유효성 검사를 해줌
  );

  await app.listen(3000);
}
bootstrap();
