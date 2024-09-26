import { Module } from '@nestjs/common';
import { AuthInfoService } from './auth-info.service';
import { AuthInfoController } from './auth-info.controller';

@Module({
  controllers: [AuthInfoController],
  providers: [AuthInfoService],
  exports:[AuthInfoService],
})
export class AuthInfoModule {}
