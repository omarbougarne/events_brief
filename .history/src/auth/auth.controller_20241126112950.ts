import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { User } from 'src/users/schema/user.schema';
import { LoginInDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post('register')
    register(@Body() signUpDto: SignUpDto): Promise<{ user: User, token: string }> {
        return this.authService.signUp(signUpDto)
    }

    @Post('login')
    login(@Body() loginInDto: LoginInDto): Promise<{ user: User, token: string }> {
        return this.authService.loginIn(loginInDto)
    }
}
