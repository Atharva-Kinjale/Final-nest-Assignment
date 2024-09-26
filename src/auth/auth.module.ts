import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthInfoModule } from 'src/auth-info/auth-info.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JWTStrategy } from './jwt.strategy';
import { UserModule } from 'src/user/user.module';

@Module({
  imports:[PassportModule,AuthInfoModule,UserModule,JwtModule.register({
    secret: 'secret1',
      signOptions: { expiresIn: '60s' },

  })],
  controllers: [AuthController],
  providers: [AuthService,LocalStrategy,JWTStrategy],
  exports:[AuthService]
})
export class AuthModule {}
