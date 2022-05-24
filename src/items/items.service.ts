import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Place } from 'src/places/schemas/places.schema';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item, ItemDocument } from './schemas/item.schema';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel(Item.name)
    private itemModel: Model<ItemDocument>,
    @InjectModel(Place.name) public placeModel: Model<Place>,
  ) {}
  async create(createItemDto: CreateItemDto) {
    return new this.itemModel(createItemDto).save();
  }

  findAll() {
    return this.itemModel.find().populate('location').exec();
  }

  findOne(id: string) {
    return this.itemModel.findById(id).populate('location').exec();
  }

  update(id: string, updateItemDto: UpdateItemDto) {
    return this.itemModel.findByIdAndUpdate(id, updateItemDto, {
      new: true,
    });
  }

  remove(id: string) {
    return this.itemModel.findByIdAndDelete(id).exec();
  }
}
