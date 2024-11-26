import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';

@Controller('events')
export class EventsController {
    constructor(private eventsService: EventsService) { }


    @Post('create')
    // @UseGuards(AuthGuard())
    createEvents(@Body() createEventDto: CreateEventDto) {
        return this.eventsService.createEvent(createEventDto)
    }
}
