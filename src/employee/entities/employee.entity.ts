// import { CarMantainance } from "src/car-mantainance/entities/car-mantainance.entity";
import { CarMantainance } from "src/car-mantainance/entities/car-mantainance.entity";
import { OrderDetail } from "src/order-details/entities/order-detail.entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name:"employee"})
export class Employee {
    @PrimaryGeneratedColumn()
    employee_Id: number;
  
    @Column({nullable:false,unique:true,name:'user_Id'})
    user_Id: number;

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

    @OneToOne(()=>User,(user)=>user.employee,{
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    })
    @JoinColumn({name:'user_Id'})
    user:User;

    @ManyToMany(()=>CarMantainance , (service)=>service.emp)
    // @JoinTable()
    service:CarMantainance

    @OneToMany(()=>OrderDetail,(order)=>order.emp)
    orderDetails:OrderDetail

}
