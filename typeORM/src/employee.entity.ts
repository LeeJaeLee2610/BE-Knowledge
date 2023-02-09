import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ContractInfo } from "./contract-info.entity";
import { Meeting } from "./meeting.entity";
import { Task } from "./task.entity";

@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    // nhân viên là manager nếu ko p thì managerId là null
    @ManyToOne(() => Employee, employee => employee.directReports, {onDelete: 'SET NULL'})
    manager: Employee;

    @OneToMany(() => Employee, employee => employee.manager)
    directReports: Employee[];

    @OneToOne(() => ContractInfo, contractInfo => contractInfo.employee)
    contractInfo: ContractInfo;

    @OneToMany(() => Task, task => task.employee)
    tasks: Task[];

    @ManyToMany(() => Meeting, meeting => meeting.attendees)
    @JoinTable()
    meetings: Meeting[]
}