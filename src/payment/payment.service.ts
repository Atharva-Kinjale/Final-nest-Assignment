// ---------------------------------------------------------------------------------------------
// Base Service wala code-------
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment } from './entities/payment.entity';
import { Repository } from 'typeorm';
import { BaseService } from 'src/BaseService';

@Injectable()
export class PaymentService extends BaseService<Payment,CreatePaymentDto,UpdatePaymentDto> {
  
  constructor(@InjectRepository(Payment) private readonly repo:Repository<Payment> ){
    super(repo,"payment_Id", ['orderDetails'])
  }
}

// import { Injectable, NotFoundException } from '@nestjs/common';
// import { CreatePaymentDto } from './dto/create-payment.dto';
// import { UpdatePaymentDto } from './dto/update-payment.dto';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Payment } from './entities/payment.entity';
// import { Repository } from 'typeorm';

// @Injectable()
// export class PaymentService {
//   constructor(@InjectRepository(Payment) private paymentRepo:Repository<Payment>){}
//   async create(createPaymentDto: CreatePaymentDto) {
//     const payment = this.paymentRepo.create(createPaymentDto);
//     return this.paymentRepo.save(payment);
//   }

//   async findAll() {
//     return await this.paymentRepo.find({relations:{orderDetails:true}})
//   }

//   async findOne(id: number) {
//     const payment = await this.paymentRepo.findOne({where:{payment_Id:id}, relations: ['orderDetails'] });
//     if (!payment) {
//       throw new NotFoundException(`Payment with ID ${id} not found`);
//     }
//     return payment;   }

//   async update(id: number, updatePaymentDto: UpdatePaymentDto) {
//     const payment=await this.paymentRepo.update(id,updatePaymentDto)
//     return this.findOne(id);
//   }

//   async remove(id: number) {
//     const result = await this.paymentRepo.softDelete(id);
//     if (result.affected === 0) {
//       throw new NotFoundException(`Payment with ID ${id} not found`);
//     } 
//   }
// }
