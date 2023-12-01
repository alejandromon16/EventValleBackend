import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  ApproveRequestEventInput,
  CreateRequestEventInput,
  GetRequestEventByIdInput,
} from './dto/request-event.input';
import { GetRequestsEventsByUserIdInput } from './dto/requests-event-list-user.input';
import { RequestEventEntity } from './entities/request-event.entity';
import { RequestsEventsService } from './requests-events.service';

@Resolver()
export class RequestsEventsResolver {
  constructor(private readonly requestEventService: RequestsEventsService) {}

  @Mutation(() => RequestEventEntity)
  createRequestEvent(
    @Args('createRequestEventInput')
    createRequestEventInput: CreateRequestEventInput,
  ) {
    return this.requestEventService.create(createRequestEventInput);
  }

  @Query(() => [RequestEventEntity])
  getListOfRequestsEvents(@Context('req') request: any) {
    console.log('query list request', request.session.id);
    return this.requestEventService.getList();
  }

  @Query(() => [RequestEventEntity])
  getListOfRequestsEventsByUserId(
    @Args('getRequestsEventsByUserId')
    getRequestsEventsByUserId: GetRequestsEventsByUserIdInput,
  ) {
    return this.requestEventService.getListByUserId(getRequestsEventsByUserId);
  }

  @Query(() => RequestEventEntity)
  getRequestEventById(
    @Args('getRequestEventById') getRequestEventById: GetRequestEventByIdInput,
  ) {
    return this.requestEventService.getById(getRequestEventById);
  }

  @Mutation(() => RequestEventEntity)
  approveRequestEvent(
    @Args('approveRequestEventInput')
    approveRequestEventInput: ApproveRequestEventInput,
  ) {
    return this.requestEventService.approveRequestEvent(
      approveRequestEventInput,
    );
  }

  @Mutation(() => RequestEventEntity)
  rejectRequestEvent(
    @Args('approveRequestEventInput')
    approveRequestEventInput: ApproveRequestEventInput,
  ) {
    return this.requestEventService.rejectRequestEvent(
      approveRequestEventInput,
    );
  }
}
