import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, Matches, Max, Min } from "class-validator";
import { Gender } from "../entities/user.entity";

export class CreateUserDto {
    // @IsNotEmpty()
    // user_Id:number 

    @IsString()
    @IsNotEmpty({ message: 'First Name is required' })
    @Matches(/^[a-zA-Z]+$/, { message: 'First Name should only contain letters' })
    F_Name:string;

    @IsNotEmpty()
    @IsNotEmpty({ message: 'Last Name is required' })
    @Matches(/^[a-zA-Z]+$/, { message: 'Last Name should only contain letters' })
    L_Name:string;

    @IsNotEmpty()
    @IsEmail({},{ message: 'Invalid email address' })
    @IsOptional()
    Email ?:string;

    @Matches(/^[0-9]{10}$/, { message: 'Phone number must be 10 digits long' })
    @IsNotEmpty({ message: 'Contact Number is required' })
    Contact_No: string;
    

    @IsEnum(Gender, { message: 'Gender must be one of the following: male, female, or other' })
    gender: Gender;


    @IsNotEmpty()
    @IsNumber()
    @Min(100000)  // Assuming the pincode is a 6-digit number
    @Max(999999)
    pincode: number;

}
