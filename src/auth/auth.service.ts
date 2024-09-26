import { Injectable } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService:JwtService){}
  genrateToken(payload){
    console.log("auth",payload);
  
    
    return this.jwtService.sign({...payload})
    // return this.jwtService.sign(tokenPayload)

  }
 
}
