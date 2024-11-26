import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export enum Role {
    USER = 'user',
    Organizer = 'organizer'
}


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

    @Prop({ unique: true, required: true })
    role: Role;
}

export const UserSchema = SchemaFactory.createForClass(User);