import { IsInt, IsNotEmpty } from "class-validator";

export class CreateCustomerDto {
    @IsInt()
    @IsNotEmpty({ message: 'User ID is required' })
    user_Id: number;
}
