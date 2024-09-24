import { CarMantainance } from "src/car-mantainance/entities/car-mantainance.entity";
import { Employee } from "src/employee/entities/employee.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name:"employeeServiceMap"})
export class EmployeeServiceMap {
    @PrimaryGeneratedColumn()
    id: number; 
    
    @Column({nullable:false,name:'employee_Id'})
    employee_Id:number;

    @Column({nullable:false,name:'service_Id'})
    service_Id:number;

    @CreateDateColumn()
    CreatedAt: Date; 

    @Column({ nullable: true, default: null })
    CreatedBy: number | null;

    @UpdateDateColumn()
    UpdatedAt: Date;

    @Column({ nullable: true, default: null })
    UpdatedBy: number | null;

    @DeleteDateColumn()
    DeletedAt: Date;


    @ManyToOne(()=>Employee , (emp)=>emp.empServiceMap)
    @JoinColumn({name:'employee_Id'})
    emp:Employee

    @ManyToOne(()=>CarMantainance , (service)=>service.empServiceMap)
    @JoinColumn({name:'service_Id'})
    service:CarMantainance
}
