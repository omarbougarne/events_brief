import { Test, TestingModule } from '@nestjs/testing';
import { EventsService } from './events.service';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Events } from './schema/events.schema';


describe('EventsService', () => {
  let eventsService: EventsService;
  let model: Model<Events>;

  const mockEvent = {
    _id: '674647098af74a3140f76de7',
    title: 'fdf',
    description: 'df',
    text: 'df',
    author: 'df',
    category: 'df',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EventsService,
        {
          provide: getModelToken(Events.name),
          useValue: {
            findById: jest.fn(),
          },
        },
      ],
    }).compile();

    eventsService = module.get<EventsService>(EventsService);
    model = module.get<Model<Events>>(getModelToken(Events.name));
  });

  describe('getEventById', () => {
    it('should find and return an event by ID', async () => {
      jest.spyOn(model, 'findById').mockResolvedValue(mockEvent as any);

      const result = await eventsService.getEventById(mockEvent._id);
      expect(model.findById).toHaveBeenCalledWith(mockEvent._id);
      expect(result).toEqual(mockEvent);
    });
  });
});


