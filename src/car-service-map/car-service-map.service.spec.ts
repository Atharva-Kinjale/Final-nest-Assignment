import { Test, TestingModule } from '@nestjs/testing';
import { CarServiceMapService } from './car-service-map.service';

describe('CarServiceMapService', () => {
  let service: CarServiceMapService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarServiceMapService],
    }).compile();

    service = module.get<CarServiceMapService>(CarServiceMapService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
