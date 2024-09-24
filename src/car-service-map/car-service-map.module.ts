import { Module } from '@nestjs/common';
import { CarServiceMapService } from './car-service-map.service';
import { CarServiceMapController } from './car-service-map.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarServiceMap } from './entities/car-service-map.entity';

@Module({
  imports:[TypeOrmModule.forFeature([CarServiceMap])],
  controllers: [CarServiceMapController],
  providers: [CarServiceMapService],
})
export class CarServiceMapModule {}
