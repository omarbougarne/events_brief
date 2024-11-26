import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/schema/user.schema';
import { SignUpDto } from './dto/user-create.dto';
import * as bcrypt from 'bcryptjs';
@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
        private jwtService: JwtService

    ) { }

    async signUp(signUpDto: SignUpDto): Promise<User> {
        const { name, email, password } = signUpDto;


        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await this.userModel.create({
            name,
            email,
            password: hashedPassword
        })

        const token = this.jwtService.sign({ id: user._id });

        return user
    }
}
