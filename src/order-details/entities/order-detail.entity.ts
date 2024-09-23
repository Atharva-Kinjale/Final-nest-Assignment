import { Car } from "src/car/entities/car.entity";
import { Customer } from "src/customer/entities/customer.entity";
import { Employee } from "src/employee/entities/employee.entity";
import { Location } from "src/location/entities/location.entity";
import { Payment } from "src/payment/entities/payment.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name:"orderDetails"})
export class OrderDetail {
    @PrimaryGeneratedColumn()
  order_Id: number;

  @Column({nullable:false,unique:true,name:'employee_Id'})
  employee_Id: number;

  @Column({nullable:false,unique:true,name:'customer_Id'})
  customer_Id: number;

  @Column({nullable:false,unique:true,name:'car_Id'})
  car_Id: number;

  @Column({ type: 'decimal' })
  amount: number;

  @Column({ type: 'date' })
  orderDate: Date;

  @Column({nullable:false ,name:"location"})
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

  @ManyToOne(() => Location, (location) => location.orderDetails, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({name:"location"})
  loc: Location;

  @ManyToOne(() => Employee, (employee) => employee.orderDetails, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({name:"employee_Id"})
  emp: Employee;

  @ManyToOne(() => Customer, (customer) => customer.orderDetails, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({name:"customer_Id"})
  cust: Customer;

  @ManyToOne(() => Car, (car) => car.orderDetails, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({name:'car_Id'})
  car: Car;

  @OneToOne(() => Payment, (payment) => payment.orderDetails, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  payment: Payment;
}
