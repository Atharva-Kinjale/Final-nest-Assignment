import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerService {
  constructor(@InjectRepository(Customer) private  customerRepo:Repository<Customer>){}
  async create(createCustomerDto: CreateCustomerDto) {
    const customer= this.customerRepo.create(createCustomerDto)
    return this.customerRepo.save(customer);
  }

  async findAll() {
    return await this.customerRepo.find({relations:{user:true}});
  }

  async findOne(id: number) {
    const customer = await this.customerRepo.findOne({where:{customer_Id:id}, relations: ['user'] });
    if (!customer) {
      throw new NotFoundException(`Customer with ID ${id} not found`);
    }
    return customer; 
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    const user=await this.customerRepo.update(id,updateCustomerDto)
    return this.findOne(id);
  }

  async remove(id: number) {
    const result = await this.customerRepo.softDelete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Employee with ID ${id} not found`);
    } }
}
