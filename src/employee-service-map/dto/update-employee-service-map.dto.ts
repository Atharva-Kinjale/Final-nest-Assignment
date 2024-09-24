import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeServiceMapDto } from './create-employee-service-map.dto';

export class UpdateEmployeeServiceMapDto extends PartialType(CreateEmployeeServiceMapDto) {}
