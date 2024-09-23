import { Module } from '@nestjs/common';
import { CarMantainanceService } from './car-mantainance.service';
import { CarMantainanceController } from './car-mantainance.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarMantainance } from './entities/car-mantainance.entity';

@Module({
  imports:[TypeOrmModule.forFeature([CarMantainance])],
  controllers: [CarMantainanceController],
  providers: [CarMantainanceService],
})
export class CarMantainanceModule {}
