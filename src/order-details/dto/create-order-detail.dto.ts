import { IsNotEmpty, IsInt, IsDecimal, Min, IsDate, IsOptional } from "class-validator";

export class CreateOrderDetailDto {
    @IsNotEmpty({ message: 'Employee ID is required' })
    @IsInt({ message: 'Employee ID must be a valid integer' })
    employee_Id: number;
  
    @IsNotEmpty({ message: 'Customer ID is required' })
    @IsInt({ message: 'Customer ID must be a valid integer' })
    customer_Id: number;
  
    @IsNotEmpty({ message: 'Car ID is required' })
    @IsInt({ message: 'Car ID must be a valid integer' })
    car_Id: number;
  
    @IsNotEmpty({ message: 'Amount is required' })
    @IsDecimal({ decimal_digits: '2'},{ message: 'Amount must be a valid decimal' })
    @Min(0, { message: 'Amount must be a positive number' })
    amount: number;
  
    @IsNotEmpty({ message: 'Order date is required' })
    @IsDate({ message: 'Order date must be a valid date' })
    orderDate: Date;
  
    @IsNotEmpty({ message: 'Location is required' })
    @IsInt({ message: 'Location must be a valid integer' })
    location: number;
  
    @IsOptional()
    @IsInt({ message: 'createdBy must be an integer' })
    createdBy?: number;
  
    @IsOptional()
    @IsInt({ message: 'updatedBy must be an integer' })
    updatedBy?: number;
}
