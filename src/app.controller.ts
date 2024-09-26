import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly authService:AuthService
  ) {}

  @Post()
  @UseGuards(AuthGuard('local'))
  getHello(@Req()req): string {
    // return this.appService.getHello();

    const token=this.authService.genrateToken(req.user)
    return token;
    return req.user;
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  getRoute(){
    return "this.appService.getHello("
  }
}
