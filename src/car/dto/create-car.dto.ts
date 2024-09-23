import { IsNotEmpty, IsDecimal, Min, IsDate, IsInt, IsBoolean, IsOptional } from "class-validator";

export class CreateCarDto {
    @IsNotEmpty({ message: 'Car model is required' })
  model: string;

  @IsNotEmpty({ message: 'Price is required' })
  @IsDecimal({ decimal_digits: '2'})
  @Min(0, { message: 'Price must be a positive value' })
  price: number;

  @IsNotEmpty({ message: 'Manufacture Year is required' })
  @IsDate({ message: 'Manufacture Year must be a valid date' })
  manufactureYear: Date;

 
  @IsDecimal({ decimal_digits: '2'})
  @Min(0, { message: 'Mileage must be a positive value' })
  mileage?: number;

  @IsNotEmpty({ message: 'Location is required' })
  @IsInt({ message: 'Location must be a valid pincode' })
  location: number;

  @IsBoolean()
  isAvailable?: boolean;

  @IsOptional()
  @IsInt({ message: 'createdBy must be an integer' })
  createdBy?: number;

  @IsOptional()
  @IsInt({ message: 'updatedBy must be an integer' })
  updatedBy?: number;
}
