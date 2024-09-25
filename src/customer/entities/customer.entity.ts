import { OrderDetail } from "src/order-details/entities/order-detail.entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name:"customer"})
export class Customer {
    @PrimaryGeneratedColumn()
    customer_Id :number;

    @Column({nullable:false,unique:true,name:'user_Id'})
    user_Id:number;

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

@OneToOne(()=>User, (user)=>user.customer,{
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',})
@JoinColumn({name:'user_Id'})
  user:User;

@OneToMany(()=>OrderDetail,(order)=>order.cust)  orderDetails:OrderDetail
}
