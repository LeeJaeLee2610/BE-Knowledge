import { ContractInfo } from './contract-info.entity';
import { Column, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm';

@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToOne(() => ContractInfo, (contractInfo) => contractInfo.employee)
    contractInfo: ContractInfo
}