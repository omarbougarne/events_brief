import { IS_ALPHA, IsEmail, IsNotEmpty, IsString, Min, MinLength } from "class-validator";


export class SignUpDto {

    @IsNotEmpty()
    @IsString()
    name: string;
    @IsNotEmpty()
    @IsString()
    role: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password: string;



}