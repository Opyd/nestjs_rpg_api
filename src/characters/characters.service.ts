import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item } from 'src/items/schemas/item.schema';
import { Place } from 'src/places/schemas/places.schema';
import { Race } from 'src/races/schemas/races.schema';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { Character, CharacterDocument } from './schemas/character.schema';

@Injectable()
export class CharactersService {
  constructor(
    @InjectModel(Character.name)
    private characterModel: Model<CharacterDocument>,
    @InjectModel(Race.name) public raceModel: Model<Race>,
    @InjectModel(Place.name) public placeModel: Model<Place>,
    @InjectModel(Item.name) public itemModel: Model<Item>,
  ) {}
  async create(createCharacterDto: CreateCharacterDto) {
    return new this.characterModel(createCharacterDto).save();
  }

  findAll() {
    return this.characterModel
      .find()
      .populate(['race', 'location', 'items'])
      .exec();
  }

  findOne(id: string) {
    return this.characterModel
      .findById(id)
      .populate(['race', 'location', 'items'])
      .exec();
  }

  update(id: string, updateCharacterDto: UpdateCharacterDto) {
    return this.characterModel.findByIdAndUpdate(id, updateCharacterDto, {
      new: true,
    });
  }

  remove(id: string) {
    return this.characterModel.findByIdAndDelete(id).exec();
  }
}
