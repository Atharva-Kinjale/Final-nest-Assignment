import { Car } from "src/car/entities/car.entity";
import { Employee } from "src/employee/entities/employee.entity";
import { Location } from "src/location/entities/location.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name:"carMaintainance"})
export class CarMantainance {
    @PrimaryGeneratedColumn()
    service_Id: number;
  
    @Column({ unique: true })
    serviceName: string;
  
    @Column({ type: 'time' })
    timeRequired: string;
  
    @Column({ type: 'text', nullable: true })
    description?: string;
  
    @Column({ type: 'decimal' })
    cost: number;

    @Column({nullable:false ,name:'pincode'})
    location: number;
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

    @ManyToOne(() => Location, (location) => location.services)
    @JoinColumn({name:"pincode"},)
    loc: Location;

    @ManyToMany(()=>Employee , (emp)=>emp.service)
    @JoinTable()
    emp:Employee

    @ManyToMany(()=>Car , (car)=>car.service)
    @JoinTable()
    car:Car
}
