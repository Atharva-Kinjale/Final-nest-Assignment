import { IsNotEmpty, IsString, Length, Matches, IsOptional, IsDecimal, IsInt } from "class-validator";

export class CreateCarMantainanceDto {
    @IsNotEmpty({ message: 'Service name is required' })
  @IsString({ message: 'Service name must be a string' })
  @Length(3, 100, { message: 'Service name must be between 3 and 100 characters' })
  serviceName: string;

  @IsNotEmpty({ message: 'Time required is mandatory' })
  @Matches(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/, { message: 'Time must be in the format HH:MM:SS' })
  timeRequired: string;

  @IsOptional()
  @IsString({ message: 'Description must be a string' })
  @Length(10, 1000, { message: 'Description must be between 10 and 1000 characters' })
  description?: string;

  @IsNotEmpty({ message: 'Cost is mandatory' })
  @IsDecimal({ decimal_digits: '2'})
  cost: number;

  @IsNotEmpty({ message: 'Location is required' })
  @IsInt({ message: 'Location must be a valid integer' })
  location: number;
}
