import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from './entities/car.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CarService {
  constructor(@InjectRepository(Car) private carRepo:Repository<Car>){}
  async create(createCarDto: CreateCarDto) {
    const car = this.carRepo.create(createCarDto);
    return this.carRepo.save(car);
  }

  async findAll() {
    return await this.carRepo.find(
      {relations:{loc:true}}
    )
  }

  async findOne(id: number) {
    const car = await this.carRepo.findOne({where:{car_Id:id},
       relations: ['loc'] 
      });
    if (!car) {
      throw new NotFoundException(`car with ID ${id} not found`);
    }
    return car; 
  }

  async update(id: number, updateCarDto: UpdateCarDto) {
    const car=await this.carRepo.update(id,updateCarDto)
    return this.findOne(id);
  }

  async remove(id: number) {
    const result = await this.carRepo.softDelete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Car with ID ${id} not found`);
    }  }
}
