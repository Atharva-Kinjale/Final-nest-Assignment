import { Test, TestingModule } from '@nestjs/testing';
import { AuthInfoService } from './auth-info.service';

describe('AuthInfoService', () => {
  let service: AuthInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthInfoService],
    }).compile();

    service = module.get<AuthInfoService>(AuthInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
