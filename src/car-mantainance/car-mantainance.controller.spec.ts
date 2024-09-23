import { Test, TestingModule } from '@nestjs/testing';
import { CarMantainanceController } from './car-mantainance.controller';
import { CarMantainanceService } from './car-mantainance.service';

describe('CarMantainanceController', () => {
  let controller: CarMantainanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarMantainanceController],
      providers: [CarMantainanceService],
    }).compile();

    controller = module.get<CarMantainanceController>(CarMantainanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
