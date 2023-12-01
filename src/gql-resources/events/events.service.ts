import { Injectable, Logger } from '@nestjs/common';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { PrismaService } from '../../common/services/database/prisma.service';
import { WhatsappService } from '../../common/services/whatsapp/ultrasmg.service';
import {
  CreateEventInput,
  GetEventByIdInput,
  GetListByRequesterIdInput,
  GetListOfEventByUserIdInput,
  UpdateEventInput,
} from './dto/create-event.input';
import { LikedEventInput } from './dto/liked-event.input';
import { PublishEventInput } from './dto/publish-event.input';
import { SaveEventInput } from './dto/save-event.input';
import { EventCreatedEvent } from './emitters/event-created';
import { EventEntity } from './entities/event.entity';

@Injectable()
export class EventsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly eventEmitter: EventEmitter2,
    private readonly whatsappService: WhatsappService,
    private logger: Logger,
  ) {}

  async create(createEventInput: CreateEventInput): Promise<EventEntity> {
    const { requestEventId, ...eventData } = createEventInput;
    const event = await this.prisma.event.create({
      data: {
        ...eventData,
        requestEvent: {
          connect: {
            id: requestEventId,
          },
        },
      },
      include: {
        requestEvent: true,
      },
    });

    return event;
  }

  async publish(publishEventInput: PublishEventInput): Promise<EventEntity> {
    const event = await this.prisma.event.update({
      where: {
        id: publishEventInput.eventId,
      },
      include: {
        requestEvent: true,
      },
      data: {
        status: 'PUBLISH',
        publishedBy: {
          connect: {
            id: publishEventInput.userId,
          },
        },
      },
    });

    const requestedEvent = await this.prisma.requestEvent.findUnique({
      where: {
        id: event.requestEventId,
      },
      include: {
        requestedBy: true,
        approvedBy: true,
      },
    });

    this.eventEmitter.emit(
      'event.created',
      new EventCreatedEvent(
        requestedEvent.requestedBy,
        requestedEvent.approvedBy,
        requestedEvent,
        event,
      ),
    );

    return event;
  }

  async unPublish(publishEventInput: PublishEventInput): Promise<EventEntity> {
    const event = await this.prisma.event.update({
      where: {
        id: publishEventInput.eventId,
      },
      include: {
        requestEvent: true,
      },
      data: {
        status: 'DRAFT',
        publishedBy: {
          connect: {
            id: publishEventInput.userId,
          },
        },
      },
    });

    return event;
  }

  async updateEventById(
    updateEventInput: UpdateEventInput,
  ): Promise<EventEntity> {
    const { eventId, ...eventData } = updateEventInput;
    const event = this.prisma.event.update({
      where: {
        id: eventId,
      },
      data: {
        ...eventData,
      },
      include: {
        requestEvent: true,
      },
    });

    return event;
  }

  async getAmountOfPublishEvents(): Promise<number> {
    const amountOfPublishEvents = await this.prisma.event.findMany({
      where: {
        status: 'PUBLISH',
      },
    });

    return amountOfPublishEvents.length;
  }

  async getAmountOfDraftEvents(): Promise<number> {
    const amountOfDraftEvents = await this.prisma.event.findMany({
      where: {
        status: 'DRAFT',
      },
    });

    return amountOfDraftEvents.length;
  }

  async getEventById({ eventId }: GetEventByIdInput): Promise<EventEntity> {
    const event = this.prisma.event.findUnique({
      where: {
        id: eventId,
      },
      include: {
        requestEvent: true,
      },
    });

    return event;
  }

  async list(): Promise<EventEntity[]> {
    const events = await this.prisma.event.findMany({
      include: {
        requestEvent: {
          include: {
            approvedBy: true,
            requestedBy: true,
          },
        },
      },
    });

    return events;
  }

  async getListByRequesterId({
    requesterId,
  }: GetListByRequesterIdInput): Promise<EventEntity[]> {
    const events = await this.prisma.event.findMany({
      where: {
        requestEvent: {
          requestedById: requesterId,
        },
      },
      include: {
        requestEvent: true,
      },
    });

    return events;
  }

  async listOfThisWeek(): Promise<EventEntity[]> {
    const today = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 7);

    const events = await this.prisma.event.findMany({
      where: {
        status: 'PUBLISH',
        startDate: {
          gte: today,
          lt: nextWeek,
        },
      },
      include: {
        requestEvent: true,
      },
    });

    return events;
  }

  async getListOfEventsSavedByUserId(
    eventsSavedByUserIdInput: GetListOfEventByUserIdInput,
  ): Promise<EventEntity[]> {
    const events = await this.prisma.event.findMany({
      where: {
        savedBy: {
          every: {
            id: eventsSavedByUserIdInput.userId,
          },
        },
      },
      include: {
        requestEvent: {
          include: {
            approvedBy: true,
            requestedBy: true,
          },
        },
        publishedBy: true,
      },
    });

    return events;
  }

  async listOfThisMonth(): Promise<EventEntity[]> {
    const today = new Date();
    const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    const events = await this.prisma.event.findMany({
      include: {
        requestEvent: true,
      },
      where: {
        startDate: {
          gte: today,
          lt: endOfMonth,
        },
        status: 'PUBLISH',
      },
    });

    return events;
  }

  async addLike(likedEventInput: LikedEventInput): Promise<EventEntity> {
    const { userId, eventId } = likedEventInput;

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    const event = await this.prisma.event.findUnique({
      where: { id: eventId },
    });

    if (!user || !event) {
      throw new Error('User or Event not found');
    }

    const updatedEvent = await this.prisma.event.update({
      where: { id: eventId },
      include: {
        requestEvent: true,
      },
      data: {
        likedBy: {
          connect: { id: userId },
        },
      },
    });

    return updatedEvent;
  }

  async removeLike(likedEventInput: LikedEventInput): Promise<EventEntity> {
    const { userId, eventId } = likedEventInput;

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    const event = await this.prisma.event.findUnique({
      where: { id: eventId },
    });

    if (!user || !event) {
      throw new Error('User or Event not found');
    }

    const updatedEvent = await this.prisma.event.update({
      where: { id: eventId },
      include: {
        requestEvent: true,
      },
      data: {
        likedBy: {
          disconnect: { id: userId },
        },
      },
    });

    return updatedEvent;
  }

  async saveEventByUser(saveEventInput: SaveEventInput): Promise<EventEntity> {
    const { userId, eventId } = saveEventInput;

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    const event = await this.prisma.event.findUnique({
      where: { id: eventId },
    });

    if (!user || !event) {
      throw new Error('User or Event not found');
    }

    const updatedEvent = await this.prisma.event.update({
      where: { id: eventId },
      include: {
        requestEvent: true,
      },
      data: {
        savedBy: {
          connect: { id: userId },
        },
      },
    });

    return updatedEvent;
  }

  async unSaveEventByUser(
    saveEventInput: SaveEventInput,
  ): Promise<EventEntity> {
    const { userId, eventId } = saveEventInput;

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    const event = await this.prisma.event.findUnique({
      where: { id: eventId },
    });

    if (!user || !event) {
      throw new Error('User or Event not found');
    }

    const updatedEvent = await this.prisma.event.update({
      where: { id: eventId },
      include: {
        requestEvent: true,
      },
      data: {
        savedBy: {
          disconnect: { id: userId },
        },
      },
    });

    return updatedEvent;
  }

  @OnEvent('event.published')
  async NotifyApproverAndRequesterOfEventPublished(payload: EventCreatedEvent) {
    try {
      this.whatsappService.sendMessage({
        to: `${payload.requestBy.phone_number}`,
        body: `
          Tu Evento:
          ${payload.event.title}.
          ${payload.event.startDate}.
  
          ha sido publicado!.
        `,
      });
    } catch (err) {
      this.logger.error('Error con Ultramsg', err);
    }
  }
}
