import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ContractInfo } from "./contract-info.entity";
import { Task } from "./task.entity";

@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToOne(() => ContractInfo, contractInfo => contractInfo.employee)
    contractInfo: ContractInfo;

    @OneToMany(() => Task, task => task.employee)
    tasks: Task[];
}