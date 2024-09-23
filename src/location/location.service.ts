import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Location } from './entities/location.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LocationService {
  constructor(@InjectRepository(Location) private repo:Repository<Location>){}
  async create(createLocationDto: CreateLocationDto) {
    const location=await this.repo.create(createLocationDto)
    return this.repo.save(location);
  }

  async findAll() {
    // return `This action returns all locations`;
    const location=await this.repo.find();
    if (!location) {
      throw new NotFoundException(`Locations not found`);
    }
    
    return location
  }

  async findOne(id: number) {
    // return `This action returns a #${id} location`;
    const location=await this.repo.findOneBy({pincode:id})
    if (!location) {
      throw new NotFoundException(`Location with pincode ${id} not found`);
    }
    return location
  }

  async update(id: number, updateLocationDto: UpdateLocationDto) {

    const location=await this.repo.update(id,updateLocationDto)
    return  this.repo.findOneBy({pincode :id});
  }

  async remove(id: number) {
    // return `This action removes a #${id} location`;
    const result=await this.repo.softDelete(id)
    if (result.affected === 0) {
      throw new NotFoundException(`Location with pincode ${id} not found`);
    }
    return `pincode #${id} is removed from  location`
  }
}
