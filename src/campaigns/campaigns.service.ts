import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Character } from 'src/characters/schemas/character.schema';
import { Item } from 'src/items/schemas/item.schema';
import { Place } from 'src/places/schemas/places.schema';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';
import { Campaign, CampaignDocument } from './schemas/campaign.schema';

@Injectable()
export class CampaignsService {
  constructor(
    @InjectModel(Campaign.name)
    private campaignModel: Model<CampaignDocument>,
    @InjectModel(Place.name) public placeModel: Model<Place>,
    @InjectModel(Character.name) public characterModel: Model<Character>,
    @InjectModel(Event.name) public eventModel: Model<Event>,
    @InjectModel(Item.name) public itemModel: Model<Item>,
  ) {}
  async create(createCampaignDto: CreateCampaignDto) {
    return new this.campaignModel(createCampaignDto).save();
  }

  findAll() {
    return this.campaignModel
      .find()
      .populate(['locations', 'characters', 'events', 'items'])
      .exec();
  }

  findOne(id: string) {
    return this.campaignModel.findById(id).exec();
  }

  update(id: string, updateCampaignDto: UpdateCampaignDto) {
    return this.campaignModel.findByIdAndUpdate(id, updateCampaignDto, {
      new: true,
    });
  }

  remove(id: string) {
    return this.campaignModel.findByIdAndDelete(id).exec();
  }
}
