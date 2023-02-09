import { SocketModule } from './socket/socket.module';
import { DownloadModule } from './downloadfiles/download.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { User } from './demo/user.entity';
import { UserModule } from './demo/user.module';
import { GatewayModule } from './gateways/gateway.module';

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
  }), UserModule, DownloadModule, GatewayModule, SocketModule]
})
export class AppModule {
  constructor(private dataSource: DataSource){}
}
