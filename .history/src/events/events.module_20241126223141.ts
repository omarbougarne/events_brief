import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { EventsSchema } from './schema/events.schema';

@Module({
  imports: [
    AuthModule,

    MongooseModule.forFeature([{ name: 'Events', schema: EventsSchema }]),
  ],
  providers: [EventsService],
  controllers: [EventsController]
})
export class EventsModule { }
