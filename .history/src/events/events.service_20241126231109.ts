import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Events } from './schema/events.schema';
import { CreateEventDto } from './dto/create-event.dto';

@Injectable()
export class EventsService {
    constructor(@InjectModel(Events.name) private eventModule: Model<Events>) { }


    async createEvent(createEventDto: CreateEventDto): Promise<Events> {
        const { title, description, author, category } = createEventDto

        const event = await this.eventModule.create({
            createEventDto
        })


        return;
    }
}
