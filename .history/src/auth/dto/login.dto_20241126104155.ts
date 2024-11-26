import { IS_ALPHA, IsEmail, IsNotEmpty, IsString, Min, MinLength } from "class-validator";


export LoginInDto {



    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password: string;

}