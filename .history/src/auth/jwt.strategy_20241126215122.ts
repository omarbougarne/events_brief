import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { PassportStrategy } from "@nestjs/passport";
import { Model } from "mongoose";
import { Strategy } from "passport-jwt";
import { User } from "src/users/schema/user.schema";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {

        super({

        })
    }
}