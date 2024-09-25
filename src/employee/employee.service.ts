// ---------------------------------------------------------------------------------------------
// Base Service wala code-------
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';
import { BaseService } from 'src/BaseService';

@Injectable()
export class EmployeeService extends BaseService<Employee,CreateEmployeeDto,UpdateEmployeeDto> {
  
  constructor(@InjectRepository(Employee) private readonly repo:Repository<Employee> ){
    super(repo,"employee_Id", ['user'])
  }
}
// ----------------------------------------------------------------------------------------------------------------
// -------------------NORMAL WORKING------------------------


// import { Injectable, NotFoundException } from '@nestjs/common';
// import { CreateEmployeeDto } from './dto/create-employee.dto';
// import { UpdateEmployeeDto } from './dto/update-employee.dto';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Employee } from './entities/employee.entity';
// import { Repository } from 'typeorm';

// @Injectable()
// export class EmployeeService {
//   constructor(@InjectRepository(Employee) private employeeRepo:Repository<Employee>){}
//   async create(createEmployeeDto: CreateEmployeeDto) {
//     const employee = this.employeeRepo.create(createEmployeeDto);
//     return this.employeeRepo.save(employee);
//   }

//   async findAll() {
//    return await this.employeeRepo.find({relations:{user:true}})
//   }

//   async findOne(id: number) {
//     const employee = await this.employeeRepo.findOne({where:{employee_Id:id}, relations: ['user'] });
//     if (!employee) {
//       throw new NotFoundException(`Employee with ID ${id} not found`);
//     }
//     return employee; 
//   }

//   async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
//     const user=await this.employeeRepo.update(id,updateEmployeeDto)
//     return this.findOne(id);
//   }

//   async remove(id: number) {
//     const result = await this.employeeRepo.softDelete(id);
//     if (result.affected === 0) {
//       throw new NotFoundException(`Employee with ID ${id} not found`);
//     } }
// }
