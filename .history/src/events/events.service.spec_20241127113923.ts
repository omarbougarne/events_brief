import { Test, TestingModule } from '@nestjs/testing';
import { EventsService } from './events.service';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Events } from './schema/events.schema';

describe('EventsService', () => {

  let eventsService: EventsService;
  let model: Model<Events>
  const mockEventsService = {}

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventsService,
        {
          provide: getModelToken(Events.name),
          useValue: mockEventsService,
        },
      ],
    }).compile();

    eventsService = module.get<EventsService>(EventsService);
    model = module.get<Model<Events>>(getModelToken(Events.name));
  });

  it('should be defined', () => {
    expect(eventsService).toBeDefined();
  });
});