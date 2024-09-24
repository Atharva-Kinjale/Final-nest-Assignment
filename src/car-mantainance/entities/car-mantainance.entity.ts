import { CarServiceMap } from "src/car-service-map/entities/car-service-map.entity";
import { Car } from "src/car/entities/car.entity";
import { EmployeeServiceMap } from "src/employee-service-map/entities/employee-service-map.entity";
import { Employee } from "src/employee/entities/employee.entity";
import { Location } from "src/location/entities/location.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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
    
    @OneToMany(()=>EmployeeServiceMap,(empSerMap)=>empSerMap.service)
    @JoinColumn({name:'service_Id'})
    empServiceMap :EmployeeServiceMap

    @OneToMany(()=>CarServiceMap,(empSerMap)=>empSerMap.service)
    @JoinColumn({name:'service_Id'})
    carServiceMap :CarServiceMap

    // @ManyToMany(()=>Employee , (emp)=>emp.service)
    // @JoinTable(
    //     {name:'employeeServiceMap',
    //     joinColumn:{name:'service_Id'},
    //     inverseJoinColumn:{name:'employee_Id'}},
    // )
    // emp:Employee

    // @ManyToMany(()=>Car , (car)=>car.service)
    // @JoinTable()
    // car:Car

}
