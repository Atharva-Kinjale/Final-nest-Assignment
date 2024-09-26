import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, Query, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { query } from 'express';
import { find } from 'rxjs';
import { request } from 'http';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
  
  @Get()
  findAll(@Query() query:any,@Req() request:Request) {
    console.log(request.url);
    
    return this.userService.findAll(query);
  }

  @Get('/details')
  findAllDetails(@Query() query:any,@Req() request:Request) {
    console.log(request.url);
    
    return this.userService.findAllDetails(query);
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
  
  @Get(":id/location/:pincode")
  find(@Param('id',) id: string,@Param('pincode')pincode:string){
    return this.userService.CustomFind(+id,+pincode)

  }
  @Get()
  find1(@Req() request:Request){
    console.log(request);
    
    return request

  }
  @Get('/email')
  find2(){
    const email='aaravsharma@gmail.com'
    return this.userService.findByEmail(email)
  }
}
