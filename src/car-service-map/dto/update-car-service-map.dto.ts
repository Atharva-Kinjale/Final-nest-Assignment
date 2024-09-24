import { PartialType } from '@nestjs/mapped-types';
import { CreateCarServiceMapDto } from './create-car-service-map.dto';

export class UpdateCarServiceMapDto extends PartialType(CreateCarServiceMapDto) {}
