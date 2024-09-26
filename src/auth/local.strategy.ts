import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthInfoService } from 'src/auth-info/auth-info.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
//   constructor(private authInfoService: AuthInfoService) {
    constructor(private authInfoService: UserService) {

    super(
        {usernameField:'email'}
    );
  }

  async validate(email: string, password: string): Promise<any> {
    // const user = await this.authInfoService.getUserByName(email);
    const user = await this.authInfoService.findByEmail(email);
    console.log(user);
    
    if (user===undefined) {
      throw new UnauthorizedException();
    }
    if(user!=undefined &&user.password===password ){

        return user;
    }
    else{
        throw new UnauthorizedException();
    }
  }
}