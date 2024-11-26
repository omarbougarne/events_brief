import { IS_ALPHA, IsEmail, IsNotEmpty, IsString, Min, MinLength } from "class-validator";


export class SignUpDto {



    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password: string;

}