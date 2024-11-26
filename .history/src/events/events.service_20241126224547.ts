import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Events } from './schema/events.schema';

@Injectable()
export class EventsService {
    constructor(@InjectModel(Events.name) private eventsSchema: Model<Events>) { }


    async test(): Promise<any> {
        const event = await this.eventsSchema.find()
        return event
    }
}
