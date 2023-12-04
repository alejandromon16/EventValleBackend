import { HttpStatus, Injectable, Logger } from '@nestjs/common';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import ApiError from 'src/common/services/error';
import { PrismaService } from '../../common/services/database/prisma.service';
import { WhatsappService } from '../../common/services/whatsapp/ultrasmg.service';
import { EventsService } from '../events/events.service';
import {
  ApproveRequestEventInput,
  CreateRequestEventInput,
  GetRequestEventByIdInput,
} from './dto/request-event.input';
import { GetRequestsEventsByUserIdInput } from './dto/requests-event-list-user.input';
import { RequestEventEntity } from './entities/request-event.entity';
import { RequestEventCreatedEvent } from './events/request-event-created';

@Injectable()
export class RequestsEventsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly eventEmitter: EventEmitter2,
    private readonly eventServices: EventsService,
    private readonly whatsappService: WhatsappService,
    private readonly logger: Logger,
  ) {}
  async create(
    createRequestEventInput: CreateRequestEventInput,
  ): Promise<RequestEventEntity> {
    const { requestedById, ...requestEventData } = createRequestEventInput;

    const user = this.prisma.user.findUnique({
      where: {
        id: requestedById,
      },
    });

    if (!user) {
      throw new ApiError(`User doesnt exist`, {
        statusCode: HttpStatus.BAD_REQUEST,
        type: 'api_error',
        explanation: 'the user id that request is not an user in the system',
      });
    }

    const requestEvent = this.prisma.requestEvent.create({
      data: {
        ...requestEventData,
        requestedBy: {
          connect: {
            id: requestedById,
          },
        },
      },
      include: { requestedBy: true, approvedBy: true },
    });

    this.eventEmitter.emit(
      'requestEvent.created',
      new RequestEventCreatedEvent(await user, (await requestEvent).title),
    );

    return requestEvent;
  }

  async getList(): Promise<RequestEventEntity[]> {
    const requestsEvents = this.prisma.requestEvent.findMany({
      include: { requestedBy: true, approvedBy: true },
    });
    return requestsEvents;
  }

  async getListByUserId({
    userId,
  }: GetRequestsEventsByUserIdInput): Promise<RequestEventEntity[]> {
    const requestsEvents = this.prisma.requestEvent.findMany({
      where: {
        requestedById: userId,
      },
      include: {
        requestedBy: true,
        approvedBy: true,
      },
    });

    return requestsEvents;
  }

  async getById({
    requestEventId,
  }: GetRequestEventByIdInput): Promise<RequestEventEntity> {
    const requestEvent = this.prisma.requestEvent.findUnique({
      where: {
        id: requestEventId,
      },
      include: {
        requestedBy: true,
        approvedBy: true,
      },
    });

    return requestEvent;
  }

  async approveRequestEvent({
    requestEventId,
    approverId,
  }: ApproveRequestEventInput): Promise<RequestEventEntity> {
    const requestEvent = await this.prisma.requestEvent.update({
      where: {
        id: requestEventId,
      },
      data: {
        status: 'APPROVED',
        approvedBy: {
          connect: {
            id: approverId,
          },
        },
      },
      include: {
        approvedBy: true,
        requestedBy: true,
      },
    });

    const event = await this.eventServices.create({
      title: requestEvent.title,
      subtitle: requestEvent.subtitle,
      description: requestEvent.description,
      startDate: requestEvent.startDate,
      endDate: requestEvent.endDate,
      locationName: requestEvent.locationName,
      locationDetail: requestEvent.locationDetail,
      address: requestEvent.address,
      requestEventId: requestEvent.id,
      principalImage: '',
    });

    const user = await this.prisma.user.findUnique({
      where: {
        id: event.requestEvent.requestedById,
      },
    });

    this.eventEmitter.emit(
      'requestEvent.accepted',
      new RequestEventCreatedEvent(user, requestEvent.title),
    );

    return requestEvent;
  }

  async rejectRequestEvent({
    requestEventId,
    approverId,
  }: ApproveRequestEventInput): Promise<RequestEventEntity> {
    const requestEvent = this.prisma.requestEvent.update({
      where: {
        id: requestEventId,
      },
      data: {
        status: 'REJECTED',
        approvedBy: {
          connect: {
            id: approverId,
          },
        },
      },
      include: {
        approvedBy: true,
        requestedBy: true,
      },
    });

    return requestEvent;
  }

  @OnEvent('requestEvent.created')
  async NotifyApprovers(payload: RequestEventCreatedEvent) {
    const approvers = await this.prisma.user.findMany({
      where: {
        roles: {
          some: {
            name: 'REQUEST_APPROVER',
          },
        },
      },
    });

    for (const approver of approvers) {
      try {
        this.whatsappService.sendMessage({
          to: `${approver.phone_number}`,
          body: `
            ${payload.user.name} ha enviado una solicitud para un Evento con titulo: ${payload.titleEvent}
          `,
        });
      } catch (err) {
        this.logger.error('Error Ultrasmg', err);
      }
    }
  }

  @OnEvent('requestEvent.accepted')
  async NotifyRequester(payload: RequestEventCreatedEvent) {
    try {
      this.whatsappService.sendMessage({
        to: `${payload.user.phone_number}`,
        body: `
            tu solicitud para un Evento con titulo: ${payload.titleEvent} ha sido aprobada.
          `,
      });
    } catch (err) {
      this.logger.error('Error Ultrasmg', err);
    }
  }
}
