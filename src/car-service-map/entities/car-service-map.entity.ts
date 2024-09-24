import { CarMantainance } from "src/car-mantainance/entities/car-mantainance.entity";
import { Car } from "src/car/entities/car.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name:'carServicemap'})
export class CarServiceMap {
    @PrimaryGeneratedColumn()
    carServiceMapId: number; 
    
    @Column({nullable:false,name:'car_Id'})
    car_Id:number;

    @Column({nullable:false,name:'service_Id'})
    service_Id:number;

    @Column({ type: 'tinyint', default: 0 })
  isInService: number;

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


    @ManyToOne(()=>Car , (car)=>car.carServiceMap, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      })
    @JoinColumn({name:'car_Id'})
    car:Car

    @ManyToOne(()=>CarMantainance , (service)=>service.empServiceMap, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      })
    @JoinColumn({name:'service_Id'})
    service:CarMantainance
}
