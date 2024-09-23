import { IsNotEmpty, IsInt, IsEnum, IsOptional } from "class-validator";

export class CreatePaymentDto {

  @IsNotEmpty({ message: 'Order ID is required' })
  @IsInt({ message: 'Order ID must be a valid integer' })
  order_Id: number;

  @IsNotEmpty({ message: 'Payment type is required' })
  @IsEnum(['cash', 'online', 'check', 'loan'], { message: 'Payment type must be one of: cash, online, check, loan' })
  paymentType: 'cash' | 'online' | 'check' | 'loan';

  @IsNotEmpty({ message: 'Payment status is required' })
  @IsEnum(['success', 'processing', 'failed'], { message: 'Payment status must be one of: success, processing, failed' })
  paymentStatus: 'success' | 'processing' | 'failed';

  @IsOptional()
  @IsInt({ message: 'createdBy must be an integer' })
  createdBy?: number;

  @IsOptional()
  @IsInt({ message: 'updatedBy must be an integer' })
  updatedBy?: number;


}
