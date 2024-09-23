import { PartialType } from '@nestjs/mapped-types';
import { CreateCarMantainanceDto } from './create-car-mantainance.dto';

export class UpdateCarMantainanceDto extends PartialType(CreateCarMantainanceDto) {}
