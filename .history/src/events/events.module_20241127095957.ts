import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { EventsSchema } from './schema/events.schema';
import { UsersModule } from 'src/users/users.module';
import { UserSchema } from 'src/users/schema/user.schema';


@Module({
  imports: [
    AuthModule,
    UsersModule,
    MongooseModule.forFeature([{ name: 'Events', schema: EventsSchema }, { name: 'User', schema: UserSchema }]),
  ],
  providers: [EventsService],
  controllers: [EventsController]
})
export class EventsModule { }
