import { IS_ALPHA, IsEmail, IsNotEmpty, IsString, Min, MinLength } from "class-validator";
import { Role } from "../enums/role.enum";


export class SignUpDto {

    @IsNotEmpty()
    @IsString()
    name: string;
    @IsNotEmpty()
    @IsString()
    role: Role;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password: string;



}