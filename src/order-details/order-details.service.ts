

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderDetail } from './entities/order-detail.entity';
import { Repository } from 'typeorm';
import { BaseService } from 'src/BaseService';

@Injectable()
export class OrderDetailsService extends BaseService<OrderDetail,CreateOrderDetailDto,UpdateOrderDetailDto> {
  
  constructor(@InjectRepository(OrderDetail) private readonly repo:Repository<OrderDetail> ){
    super(repo,"order_Id", ['emp',"cust",'car','loc'])
  }
}
// ----------------------------------------------------------------------------------------------------------------
// -------------------NORMAL WORKING------------------------



// import { Injectable, NotFoundException } from '@nestjs/common';
// import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
// import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';
// import { InjectRepository } from '@nestjs/typeorm';
// import { OrderDetail } from './entities/order-detail.entity';
// import { Repository } from 'typeorm';

// @Injectable()
// export class OrderDetailsService {
//   constructor(@InjectRepository(OrderDetail) private orderDetailRepo:Repository<OrderDetail>){}
//   async create(createOrderDetailDto: CreateOrderDetailDto) {
//     const order = this.orderDetailRepo.create(createOrderDetailDto);
//     return this.orderDetailRepo.save(order);
//   }

//   async findAll() {
//     return await this.orderDetailRepo.find({relations:{emp:true,cust:true,car:true,loc:true}})
//   }

//   async findOne(id: number) {
//     const order = await this.orderDetailRepo.findOne({where:{order_Id:id}, relations: ['emp',"cust",'car','loc'] });
//     if (!order) {
//       throw new NotFoundException(`Employee with ID ${id} not found`);
//     }
//     return order; 
//   }

//   async update(id: number, updateOrderDetailDto: UpdateOrderDetailDto) {
//     const order=await this.orderDetailRepo.update(id,updateOrderDetailDto)
//     return this.findOne(id);}

//   async remove(id: number) {
//     const result = await this.orderDetailRepo.softDelete(id);
//     if (result.affected === 0) {
//       throw new NotFoundException(`Employee with ID ${id} not found`);
//     } }
// }
