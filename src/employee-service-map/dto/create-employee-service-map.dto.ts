import { IsNotEmpty, IsInt, IsOptional } from "class-validator";

export class CreateEmployeeServiceMapDto {
    @IsNotEmpty({ message: 'Employee ID is required' })
    @IsInt({ message: 'Employee ID must be a valid integer' })
    employee_Id: number;
  
    @IsNotEmpty({ message: 'Service ID is required' })
    @IsInt({ message: 'Service ID must be a valid integer' })
    service_Id: number;
  
    @IsOptional()
    @IsInt({ message: 'createdBy must be an integer' })
    createdBy?: number;
  
    @IsOptional()
    @IsInt({ message: 'updatedBy must be an integer' })
    updatedBy?: number;
}
