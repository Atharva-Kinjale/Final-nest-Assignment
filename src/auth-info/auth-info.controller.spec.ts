import { Test, TestingModule } from '@nestjs/testing';
import { AuthInfoController } from './auth-info.controller';
import { AuthInfoService } from './auth-info.service';

describe('AuthInfoController', () => {
  let controller: AuthInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthInfoController],
      providers: [AuthInfoService],
    }).compile();

    controller = module.get<AuthInfoController>(AuthInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
