import { Employee } from './employee.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContractInfo } from './contract-info.entity';
import { Task } from './task.entity';
import { Meeting } from './meeting.entity';
import { DataSource } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'emcuong',
    database: 'typeorm',
    entities: [Employee, ContractInfo, Meeting, Task],
    synchronize: true,
  }), TypeOrmModule.forFeature([Employee, ContractInfo, Meeting, Task])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource){}
}
