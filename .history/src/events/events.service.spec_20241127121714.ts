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
    title: 'Test Event',
    description: 'Test Description',
    text: 'Test Text',
    author: 'Test Author',
    category: 'Test Category',
  };

  const mockEventArray = [mockEvent, { ...mockEvent, _id: 'abc123' }];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EventsService,
        {
          provide: getModelToken(Events.name),
          useValue: {
            findById: jest.fn(),
            findByIdAndUpdate: jest.fn(),
            findByIdAndDelete: jest.fn(),
            create: jest.fn(),
            find: jest.fn(),
          },
        },
      ],
    }).compile();

    eventsService = module.get<EventsService>(EventsService);
    model = module.get<Model<Events>>(getModelToken(Events.name));
  });

  describe('createEvent', () => {
    it('should create a new event', async () => {
      jest.spyOn(model, 'create').mockResolvedValue(mockEvent as any);

      const result = await eventsService.createEvent(mockEvent as any);
      expect(model.create).toHaveBeenCalledWith(mockEvent);
      expect(result).toEqual(mockEvent);
    });
  });

  describe('populateEvent', () => {
    it('should populate subscribers for an event', async () => {
      const mockPopulatedEvent = { ...mockEvent, subscribers: ['user1', 'user2'] };
      jest.spyOn(model, 'findById').mockReturnValue({
        populate: jest.fn().mockReturnValueOnce({
          exec: jest.fn().mockResolvedValue(mockPopulatedEvent),
        }),
      } as any);

      const result = await eventsService.populateEvent(mockEvent._id);
      expect(model.findById).toHaveBeenCalledWith(mockEvent._id);
      expect(result).toEqual(mockPopulatedEvent);
    });

    it('should throw NotFoundException if event not found', async () => {
      jest.spyOn(model, 'findById').mockReturnValue({
        populate: jest.fn().mockReturnValueOnce({
          exec: jest.fn().mockResolvedValue(null),
        }),
      } as any);

      await expect(eventsService.populateEvent('nonexistentId')).rejects.toThrow(
        NotFoundException,
      );
    });
  });



  describe('deleteEvent', () => {
    it('should delete an event', async () => {
      jest.spyOn(model, 'findByIdAndDelete').mockResolvedValue(mockEvent as any);

      const result = await eventsService.deleteEvent(mockEvent._id);
      expect(model.findByIdAndDelete).toHaveBeenCalledWith(mockEvent._id);
      expect(result).toEqual({
        message: `Event with ID "${mockEvent._id}" has been successfully deleted.`,
      });
    });

    it('should throw NotFoundException if event not found', async () => {
      jest.spyOn(model, 'findByIdAndDelete').mockResolvedValue(null);

      await expect(eventsService.deleteEvent('nonexistentId')).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('getEventById', () => {
    it('should return an event by ID', async () => {
      jest.spyOn(model, 'findById').mockResolvedValue(mockEvent as any);

      const result = await eventsService.getEventById(mockEvent._id);
      expect(model.findById).toHaveBeenCalledWith(mockEvent._id);
      expect(result).toEqual(mockEvent);
    });

    it('should throw NotFoundException if event not found', async () => {
      jest.spyOn(model, 'findById').mockResolvedValue(null);

      await expect(eventsService.getEventById('nonexistentId')).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('getAllEvents', () => {
    it('should return all events', async () => {
      jest.spyOn(model, 'find').mockResolvedValue(mockEventArray as any);

      const result = await eventsService.getAllEvents();
      expect(model.find).toHaveBeenCalled();
      expect(result).toEqual(mockEventArray);
    });
  });
});
