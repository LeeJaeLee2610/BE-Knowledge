import { Employee } from './employee.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContractInfo } from './contract-info.entity';
import { Meeting } from './meeting.entity';
import { Task } from './task.entity';
@Injectable()
export class AppService{
    constructor(
        @InjectRepository(Employee) private employeeRepo: Repository<Employee>,
        @InjectRepository(ContractInfo) private contractInfoRepo: Repository<ContractInfo>,
        @InjectRepository(Meeting) private meetingRepo: Repository<Meeting>,
        @InjectRepository(Task) private taskRepo: Repository<Task>
    ){}

    getHello(): string {
        return "Hello"
    }
}