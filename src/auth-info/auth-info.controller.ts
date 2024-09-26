import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthInfoService } from './auth-info.service';
import { CreateAuthInfoDto } from './dto/create-auth-info.dto';
import { UpdateAuthInfoDto } from './dto/update-auth-info.dto';

@Controller('auth-info')
export class AuthInfoController {
  constructor(private readonly authInfoService: AuthInfoService) {}

  // @Post()
  // create(@Body() createAuthInfoDto: CreateAuthInfoDto) {
  //   return this.authInfoService.create(createAuthInfoDto);
  // }

  // @Get()
  // findAll() {
  //   return this.authInfoService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.authInfoService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAuthInfoDto: UpdateAuthInfoDto) {
  //   return this.authInfoService.update(+id, updateAuthInfoDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.authInfoService.remove(+id);
  // }
}
