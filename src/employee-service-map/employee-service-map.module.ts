import { Module } from '@nestjs/common';
import { EmployeeServiceMapService } from './employee-service-map.service';
import { EmployeeServiceMapController } from './employee-service-map.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeServiceMap } from './entities/employee-service-map.entity';

@Module({
  imports:[TypeOrmModule.forFeature([EmployeeServiceMap])],
  controllers: [EmployeeServiceMapController],
  providers: [EmployeeServiceMapService],
})
export class EmployeeServiceMapModule {}
