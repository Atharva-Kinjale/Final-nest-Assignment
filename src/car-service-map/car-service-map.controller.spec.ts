import { Test, TestingModule } from '@nestjs/testing';
import { CarServiceMapController } from './car-service-map.controller';
import { CarServiceMapService } from './car-service-map.service';

describe('CarServiceMapController', () => {
  let controller: CarServiceMapController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarServiceMapController],
      providers: [CarServiceMapService],
    }).compile();

    controller = module.get<CarServiceMapController>(CarServiceMapController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
