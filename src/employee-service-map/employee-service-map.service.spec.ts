import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeServiceMapService } from './employee-service-map.service';

describe('EmployeeServiceMapService', () => {
  let service: EmployeeServiceMapService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeeServiceMapService],
    }).compile();

    service = module.get<EmployeeServiceMapService>(EmployeeServiceMapService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
