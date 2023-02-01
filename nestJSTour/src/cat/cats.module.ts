import { CatsService } from './services/cats.service';
import { CatsController } from './controllers/cats.controller';
import { Module } from '@nestjs/common';
import { DemoController } from './controllers/demo.controller';

@Module({
  controllers: [CatsController, DemoController],
  providers: [CatsService],
})
export class CatsModule {}