import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/schema/user.schema';

@Injectable()
export class AuthService {
    contructor(
        @InjectModel(User.name) private userModel: Model<User>

    ) { }
}
