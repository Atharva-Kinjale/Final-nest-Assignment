import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { CarServiceMapService } from './car-service-map.service';
import { CreateCarServiceMapDto } from './dto/create-car-service-map.dto';
import { UpdateCarServiceMapDto } from './dto/update-car-service-map.dto';
import { query } from 'express';

@Controller('car-service-map')
export class CarServiceMapController {
  constructor(private readonly carServiceMapService: CarServiceMapService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createCarServiceMapDto: CreateCarServiceMapDto) {
    return this.carServiceMapService.create(createCarServiceMapDto);
  }

  @Get()
  findAll(@Query() query:any) {
    return this.carServiceMapService.findAll(query);
  }

  
  @Get('/details')
  findAllDetails(@Query() query:any) {
    return this.carServiceMapService.findAllDetails(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carServiceMapService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarServiceMapDto: UpdateCarServiceMapDto) {
    return this.carServiceMapService.update(+id, updateCarServiceMapDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.carServiceMapService.remove(+id);
  }
}
