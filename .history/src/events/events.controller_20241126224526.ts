import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
    constructor(private eventsService: EventsService) { }


    @Get('show')
    @UseGuards(AuthGuard)
    getevents() {
        return this.eventsService.test()
    }
}
