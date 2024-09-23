import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCarMantainanceDto } from './dto/create-car-mantainance.dto';
import { UpdateCarMantainanceDto } from './dto/update-car-mantainance.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CarMantainance } from './entities/car-mantainance.entity';

@Injectable()
export class CarMantainanceService {
  constructor(@InjectRepository(CarMantainance) private serrviceRepo:Repository<CarMantainance>){}
  async create(createCarMantainanceDto: CreateCarMantainanceDto) {
    const employee = this.serrviceRepo.create(createCarMantainanceDto);
    return this.serrviceRepo.save(employee) ;
  }

  async findAll() {
    return await this.serrviceRepo.find({relations:{loc:true}});
    // return await this.serrviceRepo.find({relations:['loc', 'emp']});
  }

  async findOne(id: number) {
   const service=await this.serrviceRepo.findOne({where:{service_Id:id}, relations: ['loc','emp'] });
   if (!service) {
    throw new NotFoundException(`Employee with ID ${id} not found`);
  }
  return service; 
  }

  async update(id: number, updateCarMantainanceDto: UpdateCarMantainanceDto) {
    const service=await this.serrviceRepo.update(id,updateCarMantainanceDto)
    return this.findOne(id);
  }

  async remove(id: number) {
    const result = await this.serrviceRepo.softDelete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Service with ID ${id} not found`);
    } 
  }
}
