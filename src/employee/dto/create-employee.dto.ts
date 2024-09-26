import { IsEnum, IsInt, isNotEmpty, IsNotEmpty } from "class-validator";
import { Role } from "../entities/employee.entity";

export class CreateEmployeeDto {
    @IsInt()
    @IsNotEmpty({ message: 'User ID is required' })
    user_Id: number;

    @IsNotEmpty({message:'Employee Role must be defined'})
    @IsEnum({message:`Role must be one of the following :'Salesperson' ,'Technician','Manager'or'Mechanic'`})
    emplyeeRole:Role;

    @IsInt()
    @IsNotEmpty({message:'Employee Salary must be defined'})
    salary:number;
}
