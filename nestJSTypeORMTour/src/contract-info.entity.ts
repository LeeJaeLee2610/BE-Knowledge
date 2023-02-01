import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from "./employee.entity";

@Entity()
export class ContractInfo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    // Khi employee bị xóa thì liên hệ bị xóa
    @OneToOne(() => Employee, (employee) => employee.contractInfo, {onDelete: "CASCADE"})
    // Tự thêm cột employeeId
    @JoinColumn()
    employee: Employee
}