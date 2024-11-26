import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

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

    // @Prop({ required: true })
    // category: string;

}

export const EventsSchema = SchemaFactory.createForClass(Events);