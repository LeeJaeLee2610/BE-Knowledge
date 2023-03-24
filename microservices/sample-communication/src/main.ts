import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  // Tạo giao tiếp microService thông qua TCP
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
    },
  );
  app.listen();
  // const app = await NestFactory.create(AppModule);
  // app.connectMicroservice({
  //   Transport: Transport.TCP,
  //   options: {
  //     port: 3002,
  //   },
  // });
  // await app.startAllMicroservices();
  // await app.listen(3002);
}
bootstrap();
