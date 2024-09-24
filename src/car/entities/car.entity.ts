import { CarMantainance } from "src/car-mantainance/entities/car-mantainance.entity";
import { CarServiceMap } from "src/car-service-map/entities/car-service-map.entity";
import { Location } from "src/location/entities/location.entity";
import { OrderDetail } from "src/order-details/entities/order-detail.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";

@Entity({name:"car"})
export class Car {
    @PrimaryGeneratedColumn()
    car_Id:number;

    @Column({unique:true,nullable:false})
    model:string;

    @Column({nullable:false})
    price:number;
    
    @Column({nullable:false})
    manufactureYear:Date
    
    @Column({ type: 'decimal', nullable: true })
    mileage?: number;

    @Column({nullable:false ,name:"location"})
    location: number;

    @Column({ default: false })
    isAvailable: boolean;
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

    @ManyToOne(() => Location, (location) => location.car)
    @JoinColumn({name:"location"},)
    loc: Location;

    @OneToMany(()=>OrderDetail,(order)=>order.emp)
    orderDetails:OrderDetail

    @OneToMany(()=>CarServiceMap,(carservicemap)=>carservicemap.car)
    @JoinColumn({name:'car_Id'})
    carServiceMap:CarServiceMap

    // @ManyToMany(()=>CarMantainance , (service)=>service.car)
    // // @JoinTable()
    // service:CarMantainance
}
