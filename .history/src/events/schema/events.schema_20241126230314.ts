import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from '../../users/schema/user.schema';

// export enum Category {

// }

@Schema({
    timestamps: true,
})
export class Events {
    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    text: string;

    @Prop()
    author: string;

    @Prop()
    category: string;

}

export const EventsSchema = SchemaFactory.createForClass(Events);