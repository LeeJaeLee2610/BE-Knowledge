import { Task } from './task.entity';
import { Employee } from './employee.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ContractInfo } from './contract-info.entity';
import { Meeting } from './meeting.entity';

@Module({
  imports: [TypeOrmModule.forRoot({type: 'mysql', host: 'localhost', port: 3306, username: 'root', password: 'emcuong', database: 'typeorm', entities: [Employee, ContractInfo, Task, Meeting], synchronize: true})],
})
export class AppModule {}
