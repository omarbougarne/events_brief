import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Events } from './schema/events.schema';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Injectable()
export class EventsService {
    constructor(@InjectModel(Events.name) private eventModule: Model<Events>) { }


    async createEvent(createEventDto: CreateEventDto): Promise<Events> {
        const { title, description, text, author, category } = createEventDto

        const event = await this.eventModule.create({
            title,
            description,
            text,
            author,
            category
        })

        if (!event) {
            throw new NotFoundException("Please enter an event");
        }
        return event;
    }


    async updateEvent(id: string, updateEventDto: UpdateEventDto): Promise<Events> {


        const event = await this.eventModule.findByIdAndUpdate(id, updateEventDto,

            { new: true }

        )
        if (!event) {
            throw new NotFoundException(`Event with ID "${id}" not found`);
        }

        return event;
    }
}
