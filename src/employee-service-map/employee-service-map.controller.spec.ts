import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeServiceMapController } from './employee-service-map.controller';
import { EmployeeServiceMapService } from './employee-service-map.service';

describe('EmployeeServiceMapController', () => {
  let controller: EmployeeServiceMapController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeServiceMapController],
      providers: [EmployeeServiceMapService],
    }).compile();

    controller = module.get<EmployeeServiceMapController>(EmployeeServiceMapController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
