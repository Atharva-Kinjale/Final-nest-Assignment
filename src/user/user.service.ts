import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';


@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo:Repository<User>){}

  async create(createUserDto: CreateUserDto) {
    let userdata;
    try {
      console.log("before",createUserDto);
      
      userdata= this.userRepo.create(createUserDto);
      console.log("after",userdata);

      return await this.userRepo.save(userdata)
    } catch (error) {
      // throw new Error(error)
      return error.message

    }
  }

  async findAll() {
    
      const users=await this.userRepo.find({
        relations:{location:true}
        // {Location:true,},
      });
      
      return users
    
  }

  async findOne(id: number) {
   
    const users=await this.userRepo.findOne({where:{user_Id:id},relations:{location:true}})
    if (!users) {
      throw new NotFoundException(`User with Id ${id} not found`);
    }
    return users
  }
  async update(id: number, updateUserDto: UpdateUserDto) {
    const user=await this.userRepo.update(id,updateUserDto)
    return  this.userRepo.findOne({where:{user_Id:id},relations:{location:true}});
  }

  async remove(id: number) {
    const result = await this.userRepo.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return`user with id ${id} is deleted successfully`
  }
}
