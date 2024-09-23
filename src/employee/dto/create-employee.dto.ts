import { IsInt, IsNotEmpty } from "class-validator";

export class CreateEmployeeDto {
    @IsInt()
    @IsNotEmpty({ message: 'User ID is required' })
    user_Id: number;
}
