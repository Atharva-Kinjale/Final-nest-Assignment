import { Test, TestingModule } from '@nestjs/testing';
import { CarMantainanceService } from './car-mantainance.service';

describe('CarMantainanceService', () => {
  let service: CarMantainanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarMantainanceService],
    }).compile();

    service = module.get<CarMantainanceService>(CarMantainanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
