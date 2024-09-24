import { IsNotEmpty, IsInt, IsOptional, IsIn } from "class-validator";

export class CreateCarServiceMapDto {
    @IsNotEmpty({ message: 'Service ID is required' })
    @IsInt({ message: 'Service ID must be a valid integer' })
    service_Id: number;
  
    @IsNotEmpty({ message: 'Car ID is required' })
    @IsInt({ message: 'Car ID must be a valid integer' })
    car_Id: number;
  
    @IsOptional()
    @IsIn([0, 1], { message: 'isInService must be either 0 (false) or 1 (true)' })
    isInService?: number;
  
    @IsOptional()
    @IsInt({ message: 'createdBy must be an integer' })
    createdBy?: number;
  
    @IsOptional()
    @IsInt({ message: 'updatedBy must be an integer' })
    updatedBy?: number;
}
