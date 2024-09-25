import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, Query } from '@nestjs/common';
import { LocationService } from './location.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

@Controller('locations')
export class LocationController {
  constructor(private readonly locationsService: LocationService) {}

  @Post()
  create(@Body(ValidationPipe) createLocationDto: CreateLocationDto) {
    return this.locationsService.create(createLocationDto);
  }

  @Get()
  findAll(@Query()query:any) {
    // console.log(query);
    
    return this.locationsService.findAll(query);
  }

  @Get(':pincode')
  findOne(@Param('pincode') pincode: string) {
    return this.locationsService.findOne(+pincode);
  }

  @Patch(':pincode')
  update(@Param('pincode') pincode: string, @Body() updateLocationDto: UpdateLocationDto) {
    return this.locationsService.update(+pincode, updateLocationDto);
  }

  @Delete(':pincode')
  remove(@Param('pincode') pincode: string) {
    return this.locationsService.remove(+pincode);
  }
}
