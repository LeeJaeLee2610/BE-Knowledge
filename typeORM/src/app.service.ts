import { Task } from './task.entity';
import { Meeting } from './meeting.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';
import { Injectable } from '@nestjs/common';
import { ContractInfo } from './contract-info.entity';

@Injectable()
export class AppService {
  constructor(@InjectRepository(Employee) private employeeRepo: Repository<Employee>,
  @InjectRepository(ContractInfo) private contractInfoRepo: Repository<ContractInfo>,
  @InjectRepository(Meeting) private meetingRepo: Repository<Meeting>,
  @InjectRepository(Task) private taskRepo: Repository<Task>){}  

  async seed(){
    // Tạo 1 nhân viên có tên là
    const ceo = this.employeeRepo.create({name: 'Ngoc Lan'})
    // Lưu vào repo
    await this.employeeRepo.save(ceo);

    // Tạo contract info cho nhaan vieen
    const ceoContractInfo = this.contractInfoRepo.create({
      email: "duonglan@gmail.com"
    })
    // Gán contractInfo cho employee là employeeId
    ceoContractInfo.employee = ceo;
    // Lưu thông tin contract info
    await this.contractInfoRepo.save(ceoContractInfo)

    // Tạo ra manager vs tên này để quản lý employeeId ceo
    // Tạo cái directorReport cho tk employee
    const manager = this.employeeRepo.create({
      name: "Lan",
      manager: ceo,
    })

    // Tạo ra 2 task
    const task1 = this.taskRepo.create({name: 'Hire People'})
    await this.taskRepo.save(task1);
    const task2 = this.taskRepo.create({name: "Present to CEO"})
    await this.taskRepo.save(task2)

    // Thêm employeeId quản lý task ng đấy là manager..
    manager.tasks = [task1, task2]

    // Thêm 1 cuộc meeting gán ng tham gia là ceo
    const meeting1 = this.meetingRepo.create({zoomUrl: "meeting.com"});
    meeting1.attendees = [ceo]
    await this.meetingRepo.save(meeting1)
    
    // Thêm manger vào meeting1
    manager.meetings = [meeting1]

    await this.employeeRepo.save(manager);
  }

  async getEmployeeById(id: number) {
    // const tmp = await this.employeeRepo.findOne({
    //   where: {id: id},
    //   relations: ['manager', 'directReports', 'contractInfo', 'tasks', 'meetings']
    // })
    // return tmp;
    const res = await this.employeeRepo.createQueryBuilder('employee')
                          .leftJoinAndSelect('employee.meetings', 'meetings')
                          .where('employee.id = :employeeId', {employeeId: id}).getOne()
    return res;
  }
}
