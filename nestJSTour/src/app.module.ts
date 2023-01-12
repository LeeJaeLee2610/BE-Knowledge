import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { CatsModule } from './cat/cats.module';
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';

@Module({
  imports: [CatsModule],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(
        { path: 'cats/do-get', method: RequestMethod.GET },
        { path: 'cats/do-post', method: RequestMethod.POST },
      );
  }
}
