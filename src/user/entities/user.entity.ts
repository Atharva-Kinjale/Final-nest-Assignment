
import { Customer } from "src/customer/entities/customer.entity";
import { Employee } from "src/employee/entities/employee.entity";
import { Location } from "src/location/entities/location.entity";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity,  JoinColumn,  ManyToOne,  OneToOne,  PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum Gender {
    MALE = 'male',
    FEMALE = 'female',
    OTHER = 'other'
  }
  
  import * as bcrypt from 'bcryptjs';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    user_Id:number;

    @Column()
    F_Name:string;
 
    @Column()
    L_Name:string;

    @Column({unique:true})
    Email:string;

    @Column({unique:true})
    Contact_No:string;

    @Column({
        type: "enum",
        enum: Gender
    })
    Gender:Gender;

    @Column({name:"pinCode"})
    pincode:number;
    
    @Column({nullable:false,default:'pass123'})
  password: string;

//   @BeforeInsert()
//   @BeforeUpdate()
//   async hashPassword() {
//     if (this.password) {
//       this.password = await bcrypt.hash(this.password, 10); // 10 is the salt rounds
//     }
//   }
    @CreateDateColumn()
    CreatedAt: Date;

    @Column({ nullable: true, default: null })
    CreatedBy: number | null;

    @Column({ nullable: true, default: null })
    UpdatedAt: Date;
    
    @UpdateDateColumn()
    @Column({ nullable: true, default: null })
    UpdatedBy: number | null;
    
    @DeleteDateColumn()
    DeletedAt: Date;
    
    @ManyToOne(() => Location, (location) => location.users)
    @JoinColumn({name:"pinCode"},)
    location: Location;
  
    @OneToOne(()=>Employee ,(emp)=>emp.user)
    employee:Employee;

    @OneToOne(()=>Customer ,(cust)=>cust.user)
    customer:Customer;
}
