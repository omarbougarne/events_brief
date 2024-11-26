import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Roles } from 'src/auth/enums/role.enum';





@Schema({
    timestamps: true,
})
export class User extends Document {
    @Prop({ unique: true, required: true })
    name: string;

    @Prop({ unique: true, required: true })
    email: string;

    @Prop({ unique: true, required: true })
    password: string;

    @Prop({ required: true, default: 'user' })
    role: Roles[]
}

export const UserSchema = SchemaFactory.createForClass(User);