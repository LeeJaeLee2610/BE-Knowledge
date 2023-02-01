import { JoinTable, ManyToMany } from 'typeorm';
import { ManyToOne } from 'typeorm';
import { OneToMany } from 'typeorm';
import { ContractInfo } from './contract-info.entity';
import { Column, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm';
import { Task } from './task.entity';
import { Meeting } from './meeting.entity';

@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Employee, employee => employee.directReports, {onDelete: 'SET NULL'})
    manager: Employee;

    @OneToMany(() => ContractInfo, (contractInfo) => contractInfo.employee)
    directReports: Employee[]

    @OneToOne(() => ContractInfo, (contractInfo) => contractInfo.employee)
    contractInfo: ContractInfo

    @OneToMany(() => Task, task => task.employee)
    tasks: Task[]

    @ManyToMany(() => Meeting, (meeting) => meeting.attendees)
    @JoinTable()
    meetings: Meeting[];

}