import { Profile } from './databases/entities/profile.entity';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { CatsModule } from './cat/cats.module';
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './databases/entities/user.entity';
import { UsersModule } from './databases/users.module';
import { Post } from './databases/entities/post.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: "root",
    password: "emcuong",
    database: "demo",
    entities: [User, Profile, Post],
    synchronize: true,
    autoLoadEntities: true
  }), UsersModule],
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
