import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Events } from './schema/events.schema';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { User } from 'src/users/schema/user.schema';

@Injectable()
export class EventsService {
    constructor(
        @InjectModel(Events.name) private eventModule: Model<Events>,
        @InjectModel(User.name) private userModule: Model<User>
    ) { }


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
            console.log("Empty body")
        }
        return event;
    }


    async updateEvent(id: string, updateEventDto: UpdateEventDto): Promise<Events> {

        const user = 
        const event = await this.eventModule.findByIdAndUpdate(
            id,
            updateEventDto,
            subscribers: []
            { new: true }

        )
        if (!event) {
            throw new NotFoundException(`Event with ID "${id}" not found`);
        }

        return event;
    }

    async deleteEvent(id: string): Promise<{ message: string }> {
        const event = await this.eventModule.findByIdAndDelete(id);

        if (!event) {
            throw new NotFoundException(`Event with ID "${id}" not found`);
        }

        return { message: `Event with ID "${id}" has been successfully deleted.` };
    }
    async getEventById(id: string): Promise<Events> {
        const event = await this.eventModule.findById(id);

        if (!event) {
            throw new NotFoundException(`Event with ID "${id}" not found`);
        }

        return event;
    }

    async getAllEvents(): Promise<Events[]> {
        return await this.eventModule.find();
    }

}
