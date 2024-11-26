import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

// export enum Category {

// }

@Schema({
    timestamps: true,
})
export class Events {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    text: string;

    @Prop({ required: true })
    author: string;

    @Prop({ required: true })
    category: string;

}

export const EventsSchema = SchemaFactory.createForClass(Events);