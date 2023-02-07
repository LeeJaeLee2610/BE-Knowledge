import { DownloadModule } from './downloadfiles/download.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { User } from './demo/user.entity';
import { UserModule } from './demo/user.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'emcuong',
    database: 'demo',
    entities: [User],
    synchronize: true,
  }), UserModule, DownloadModule]
})
export class AppModule {
  constructor(private dataSource: DataSource){}
}
