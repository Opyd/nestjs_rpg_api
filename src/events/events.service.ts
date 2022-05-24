import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Place } from 'src/places/schemas/places.schema';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { EventDocument } from './schemas/event.schema';

@Injectable()
export class EventsService {
  constructor(
    @InjectModel(Event.name)
    private eventModel: Model<EventDocument>,
    @InjectModel(Place.name) public placeModel: Model<Place>,
  ) {}
  async create(createEventDto: CreateEventDto) {
    return new this.eventModel(createEventDto).save();
  }

  findAll() {
    return this.eventModel.find().populate('location').exec();
  }

  findOne(id: string) {
    return this.eventModel.findById(id).exec();
  }

  update(id: string, updateEventDto: UpdateEventDto) {
    return this.eventModel.findByIdAndUpdate(id, updateEventDto, {
      new: true,
    });
  }

  remove(id: string) {
    return this.eventModel.findByIdAndDelete(id).exec();
  }
}
