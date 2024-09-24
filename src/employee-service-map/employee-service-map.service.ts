import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeServiceMapDto } from './dto/create-employee-service-map.dto';
import { UpdateEmployeeServiceMapDto } from './dto/update-employee-service-map.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeServiceMap } from './entities/employee-service-map.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeServiceMapService {
  constructor(@InjectRepository(EmployeeServiceMap) private empservicemapRepo:Repository<EmployeeServiceMap>){}

  async create(createEmployeeServiceMapDto: CreateEmployeeServiceMapDto) {
    const employeeService = this.empservicemapRepo.create(createEmployeeServiceMapDto);
    return this.empservicemapRepo.save(employeeService);

  }

  async findAll() {
    return this.empservicemapRepo.find({ relations: {emp:true,service:true}});

  }

  async findOne(id: number) {
    const employeeService = await this.empservicemapRepo.findOne( {where:{id:id} ,relations: ['emp', 'service'] });
    if (!employeeService) {
      throw new NotFoundException(`EmployeeService with ID ${id} not found`);
    }
    return employeeService;
  }

  async update(id: number, updateEmployeeServiceMapDto: UpdateEmployeeServiceMapDto) {
    const employeeService = await this.empservicemapRepo.findOne({where:{id:id}, relations: ['emp', 'service'] });
    if (!employeeService) {
      throw new NotFoundException(`EmployeeService with ID ${id} not found`);
    }
    const entry=await this.empservicemapRepo.update(id,updateEmployeeServiceMapDto)
    return employeeService;
  }

  async remove(id: number) {
    const result = await this.empservicemapRepo.softDelete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`EmployeeService with ID ${id} not found`);
    }
  }
}
