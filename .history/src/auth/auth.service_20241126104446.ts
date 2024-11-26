import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/schema/user.schema';
import { SignUpDto } from './dto/signup.dto';
import * as bcrypt from 'bcryptjs';
import { LoginInDto } from './dto/login.dto';
@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
        private jwtService: JwtService

    ) { }

    async signUp(signUpDto: SignUpDto): Promise<{ user: User, token: string }> {
        const { name, email, password } = signUpDto;


        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await this.userModel.create({
            name,
            email,
            password: hashedPassword
        })

        const token = this.jwtService.sign({ id: user._id });

        return { user, token }
    }

    async loginIn(loginInDto: LoginInDto): Promise<{ user: User, token: string }> {
        const { email, password } = loginInDto;



        const user = await this.userModel.create({
            email,
            password: 
        })

        const compare = await bcrypt.compare(password, user.password)
        const token = this.jwtService.sign({ id: user._id });

        return { user, token }
    }
}
