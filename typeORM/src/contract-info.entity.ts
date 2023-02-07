import { Column, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm';
import { Employee } from './employee.entity';

@Entity()
export class ContractInfo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    phone: string;

    @Column()
    email: string;

    @OneToOne(() => Employee, employee => employee.contractInfo, {onDelete: 'CASCADE'})
    @JoinColumn()
    employee: Employee;
}