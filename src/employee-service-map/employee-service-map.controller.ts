import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { EmployeeServiceMapService } from './employee-service-map.service';
import { CreateEmployeeServiceMapDto } from './dto/create-employee-service-map.dto';
import { UpdateEmployeeServiceMapDto } from './dto/update-employee-service-map.dto';

@Controller('employee-service-map')
export class EmployeeServiceMapController {
  constructor(private readonly employeeServiceMapService: EmployeeServiceMapService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() 
  createEmployeeServiceMapDto: CreateEmployeeServiceMapDto) {
    return this.employeeServiceMapService.create(createEmployeeServiceMapDto);
  }

  @Get()
  findAll() {
    return this.employeeServiceMapService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeServiceMapService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeeServiceMapDto: UpdateEmployeeServiceMapDto) {
    return this.employeeServiceMapService.update(+id, updateEmployeeServiceMapDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.employeeServiceMapService.remove(+id);
  }
}
