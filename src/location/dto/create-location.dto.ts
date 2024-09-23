import { IsNotEmpty, IsNumber, Length, Matches, Max, MaxLength, Min, MinLength } from "class-validator";

export class CreateLocationDto {
    @IsNotEmpty()
    @IsNumber()
    @Min(100000)  // Assuming the pincode is a 6-digit number
    @Max(999999)
    pincode: number;

    @IsNotEmpty()
    @Matches(/^[a-zA-Z\s]+$/, { message: 'City should only contain letters and spaces' })
    city:string;

    @IsNotEmpty()
    @Matches(/^[a-zA-Z\s]+$/, { message: 'City should only contain letters and spaces' })

    state:string;

    @IsNotEmpty()
    @Matches(/^[a-zA-Z\s]+$/, { message: 'City should only contain letters and spaces' })

    country:string;
}
