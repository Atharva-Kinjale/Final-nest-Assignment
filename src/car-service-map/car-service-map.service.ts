import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCarServiceMapDto } from './dto/create-car-service-map.dto';
import { UpdateCarServiceMapDto } from './dto/update-car-service-map.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CarServiceMap } from './entities/car-service-map.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CarServiceMapService {
  constructor(@InjectRepository(CarServiceMap) private carServicemapRepo:Repository<CarServiceMap>){}
  async create(createCarServiceMapDto: CreateCarServiceMapDto) {
    const carService = this.carServicemapRepo.create(createCarServiceMapDto);
    return this.carServicemapRepo.save(carService);
  
  }

  async findAll() {
    return this.carServicemapRepo.find({ relations: ['car', 'service'] });
  }

  async findOne(id: number) {
    const carService = await this.carServicemapRepo.findOne({where:{carServiceMapId:id},relations:{car:true,service:true}});
    if (!carService) {
      throw new NotFoundException(`CarService with ID ${id} not found`);
    }
    return carService;
  }

  async update(id: number, updateCarServiceMapDto: UpdateCarServiceMapDto) {
    const carService = await this.findOne(id);
    const entry=await this.carServicemapRepo.update(id,updateCarServiceMapDto)
    return carService;
  
  }

  async remove(id: number) {
    const result = await this.carServicemapRepo.softDelete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`CarserviceMap with ID ${id} not found`);
    }
  }
}
