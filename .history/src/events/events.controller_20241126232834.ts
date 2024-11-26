import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
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
}
