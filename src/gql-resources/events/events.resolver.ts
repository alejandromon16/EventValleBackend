/* eslint-disable prettier/prettier */
import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  CreateEventInput,
  GetEventByIdInput,
  GetListByRequesterIdInput,
  GetListOfEventsSavedByUserIdInput,
  UpdateEventInput,
} from './dto/create-event.input';
import { LikedEventInput } from './dto/liked-event.input';
import { PublishEventInput, UnPublishEventInput } from './dto/publish-event.input';
import { SaveEventInput } from './dto/save-event.input';
import { EventEntity } from './entities/event.entity';
import { EventsService } from './events.service';

@Resolver()
export class EventsResolver {
  constructor(private readonly eventsService: EventsService) {}

  @Query(() => [EventEntity])
  getListOfEvents(@Context('req') request: any) {
    console.log('query list Events', request.session.id);
    return this.eventsService.list();
  }

  @Query(() => [EventEntity])
  getListOfEventsForThisWeek() {
    return this.eventsService.listOfThisWeek();
  }

  @Query(() => [EventEntity])
  getListOfEventsForThisMonth() {
    return this.eventsService.listOfThisMonth();
  }

  @Query(() => [EventEntity])
  getListOfEventsByRequesterId(
    @Args('getListOfEventsByRequesterIdInput')
    getListOfEventsByRequesterId: GetListByRequesterIdInput,
  ) {
    return this.eventsService.getListByRequesterId(
      getListOfEventsByRequesterId,
    );
  }

  @Query(() => [EventEntity])
  getListOfEventsSavedByUserId(@Args('getListOfEventsSavedByUserIdInput')getListOfEventsSavedByUserIdInput: GetListOfEventsSavedByUserIdInput ){
    return this.eventsService.getListOfEventsSavedByUserId(getListOfEventsSavedByUserIdInput);
  }

  @Query(() => Int)
  getAmountOfPublishEvents(@Context('req') request: any){
    console.log('query', request.session.id);
    return this.eventsService.getAmountOfPublishEvents();
  }

  @Query(() => Int)
  getAmountOfDraftEvents(@Context('req') request: any){
    console.log('query', request.session.id);
    return this.eventsService.getAmountOfDraftEvents();
  }

  @Mutation(() => EventEntity)
  updateEvent(@Args('updateEventInput') updateEventInput: UpdateEventInput) {
    return this.eventsService.updateEventById(updateEventInput);
  }

  @Mutation(() => EventEntity)
  publishEvent(@Args('publishEventInput') publishEventInput: PublishEventInput) {
    return this.eventsService.publish(publishEventInput);
  }

  @Mutation(() => EventEntity)
  unPublishEvent(@Args('unPublishEventInput') unPublishEventInput: UnPublishEventInput) {
    return this.eventsService.unPublish(unPublishEventInput);
  }

  @Mutation(() => EventEntity)
  createEvent(@Args('createEventInput') createEventInput: CreateEventInput) {
    return this.eventsService.create(createEventInput);
  }

  @Mutation(() => EventEntity)
  addLike(@Args('likedEventInput') likedEventInput: LikedEventInput) {
    return this.eventsService.addLike(likedEventInput);
  }

  @Mutation(() => EventEntity)
  removeLike(@Args('likedEventInput') likedEventInput: LikedEventInput) {
    return this.eventsService.removeLike(likedEventInput);
  }

  @Mutation(() => EventEntity)
  saveEventByUser(@Args('saveEventInput') saveEventInput: SaveEventInput) {
    return this.eventsService.saveEventByUser(saveEventInput);
  }

  @Mutation(() => EventEntity)
  unSaveEventByUser(@Args('saveEventInput') saveEventInput: SaveEventInput) {
    return this.eventsService.unSaveEventByUser(saveEventInput);
  }

  @Query(() => EventEntity)
  getEventById(
    @Args('getEventByIdInput') getEventByIdInput: GetEventByIdInput,
  ) {
    return this.eventsService.getEventById(getEventByIdInput);
  }
}
