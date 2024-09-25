import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CarMantainanceService } from './car-mantainance.service';
import { CreateCarMantainanceDto } from './dto/create-car-mantainance.dto';
import { UpdateCarMantainanceDto } from './dto/update-car-mantainance.dto';


@Controller('car-mantainance')
export class CarMantainanceController {
  constructor(private readonly carMantainanceService: CarMantainanceService) {}

  @Post()
  create(@Body() createCarMantainanceDto: CreateCarMantainanceDto) {
    return this.carMantainanceService.create(createCarMantainanceDto);
  }

  @Get()
  findAll(@Query() query:any) {
    return this.carMantainanceService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carMantainanceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarMantainanceDto: UpdateCarMantainanceDto) {
    return this.carMantainanceService.update(+id, updateCarMantainanceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carMantainanceService.remove(+id);
  }
}
