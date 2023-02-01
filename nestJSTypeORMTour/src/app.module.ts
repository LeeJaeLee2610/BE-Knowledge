import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forRoot({type: 'mysql', host: 'localhost', port: 3306, username: 'root', password: 'emcuong', database: 'typeorm', entities: [], synchronize: true})],
})
export class AppModule {}
