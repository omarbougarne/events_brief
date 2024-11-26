import { IS_ALPHA, IsEmail, IsNotEmpty, IsString, Min } from "class-validator";


export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    name: string;


    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @Min(6)
    password: string;

}