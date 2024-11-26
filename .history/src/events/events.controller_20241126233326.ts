import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Controller('events')
export class EventsController {
    constructor(private eventsService: EventsService) { }


    @Post('create')
    // @UseGuards(AuthGuard())
    createEvents(@Body() createEventDto: CreateEventDto) {
        return this.eventsService.createEvent(createEventDto)
    }


    @Patch(':id')
    async updateEvent(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
        return await this.eventsService.updateEvent(id, updateEventDto);
    }


    @Delete(':id')
    async deleteEvent(@Param('id') id: string) {
        return await this.eventsService.deleteEvent(id);
    }

    @Get(':id')
    async getEventById(@Param('id') id: string) {
        return await this.eventsService.getEventById(id);
    }

    @Get()
    @UseGuards(AuthGuard())
    async getAllEvents() {
        return await this.eventsService.getAllEvents();
    }
}
