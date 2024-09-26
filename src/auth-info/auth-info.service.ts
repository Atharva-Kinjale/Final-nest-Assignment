import { Injectable } from '@nestjs/common';
import { CreateAuthInfoDto } from './dto/create-auth-info.dto';
import { UpdateAuthInfoDto } from './dto/update-auth-info.dto';
import { AuthInfo } from './entities/auth-info.entity';

@Injectable()
export class AuthInfoService {
  public users:AuthInfo[]=[
    {username:"User1",
      email:"user1@gmail.com",
      password:"Admin"
    },
    {username:"User2",
      email:"user2@gmail.com",
      password:"Admin"
    },
    {username:"User3",
      email:"user3@gmail.com",
      password:"Admin"
    },


  ]
  getUserByName(UserName:string){
    return this.users.find(user=>user.email===UserName)
  }
  // create(createAuthInfoDto: CreateAuthInfoDto) {
  //   return 'This action adds a new authInfo';
  // }

  // findAll() {
  //   return `This action returns all authInfo`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} authInfo`;
  // }

  // update(id: number, updateAuthInfoDto: UpdateAuthInfoDto) {
  //   return `This action updates a #${id} authInfo`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} authInfo`;
  // }
}
