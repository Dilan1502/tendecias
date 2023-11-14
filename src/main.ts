import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('documentacion haro')
    .setDescription('instituto tecnologico superior yavirac')
    .setVersion('1.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(new ValidationPipe({whitelist: true, 
                                        forbidNonWhitelisted: true, 
                                        errorHttpStatusCode: 422,}));

  await app.listen(3000);
}
bootstrap();
