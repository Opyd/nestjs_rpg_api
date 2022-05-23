import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { Place, PlaceDocument } from './schemas/places.schema';

@Injectable()
export class PlacesService {
  constructor(
    @InjectModel(Place.name) private placeModel: Model<PlaceDocument>,
  ) {}
  create(createPlaceDto: CreatePlaceDto) {
    return new this.placeModel(createPlaceDto).save();
  }

  findAll() {
    return this.placeModel.find({}).exec();
  }

  findOne(id: string) {
    return this.placeModel.findById(id).exec();
  }

  update(id: string, updatePlaceDto: UpdatePlaceDto) {
    return this.placeModel.findByIdAndUpdate(id, updatePlaceDto, { new: true });
  }

  remove(id: string) {
    return this.placeModel.findByIdAndRemove(id).exec();
  }
}
