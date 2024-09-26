import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService:JwtService){}
  genrateToken(payload){
    console.log("auth",payload);
    // const tokenPayload = {
    //   userId: payload.user_Id,
    //   email: payload.Email,
    //   fName: payload.F_Name,s
    //   lName: payload.L_Name,
    //   pass:payload.password
    // };
    
    return this.jwtService.sign({...payload})
    // return this.jwtService.sign(tokenPayload)

  }
  // create(createAuthDto: CreateAuthDto) {
  //   return 'This action adds a new auth';
  // }

  // findAll() {
  //   return `This action returns all auth`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} auth`;
  // }

  // update(id: number, updateAuthDto: UpdateAuthDto) {
  //   return `This action updates a #${id} auth`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} auth`;
  // }
}
