import { OrderDetail } from "src/order-details/entities/order-detail.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name:'payment'})
export class Payment {
    @PrimaryGeneratedColumn()
    payment_Id: number;
  
    @Column({nullable:false,name:'order_Id'})
    order_Id: number;
  
    @Column({
      type: 'enum',
      enum: ['cash', 'online', 'check', 'loan'],
    })
    paymentType: 'cash' | 'online' | 'check' | 'loan';
  
    @Column({
      type: 'enum',
      enum: ['success', 'processing', 'failed'],
    })
    paymentStatus: 'success' | 'processing' | 'failed';
  
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
  
  
    @ManyToOne(() => OrderDetail, (orderDetails) => orderDetails.payment, {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    })
    @JoinColumn({name:'order_Id'})
    orderDetails: OrderDetail;

}

