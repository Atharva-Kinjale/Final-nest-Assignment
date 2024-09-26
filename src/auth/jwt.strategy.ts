import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable,  } from '@nestjs/common';
import { log } from 'console';


@Injectable()
export class JWTStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: "secret1",

    });
  }

  async validate(payload: any): Promise<any> {
    console.log(payload);
    
    return payload
  }
}