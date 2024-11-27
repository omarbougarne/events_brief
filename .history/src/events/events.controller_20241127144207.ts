import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Role } from 'src/auth/enums/role.enum';
import { Roles } from 'src/auth/decorators/role.decorator';
import { RolesGuard } from 'src/auth/guards/role.guards';


@Controller('events')
export class EventsController {
    constructor(private eventsService: EventsService) { }


    @Get()
    @UseGuards(AuthGuard())
    async getAllEvents() {
        return await this.eventsService.getAllEvents();
    }
    @Post()
    @Roles(Role.Organizer)
    @UseGuards(AuthGuard(), RolesGuard)
    createEvents(@Body() createEventDto: CreateEventDto) {
        return this.eventsService.createEvent(createEventDto)
    }


    @Patch(':id')
    @Roles(Role.Organizer)
    @UseGuards(AuthGuard(), RolesGuard)
    async updateEvent(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
        return await this.eventsService.updateEvent(id, updateEventDto);
    }

    // @Patch('/fill/:id')
    // @Roles(Role.Organizer)
    // @UseGuards(AuthGuard(), RolesGuard)
    // async populateEvents(@Param('id') id: string) {
    //     return await this.eventsService.populateEvent(id);
    // }


    @Delete(':id')
    @Roles(Role.Organizer)
    @UseGuards(AuthGuard(), RolesGuard)
    async deleteEvent(@Param('id') id: string) {
        return await this.eventsService.deleteEvent(id);
    }

    // @Get(':id')
    // @UseGuards(AuthGuard())
    // async getEventById(@Param('id') id: string) {
    //     return await this.eventsService.getEventById(id);
    // }

}
