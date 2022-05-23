import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Mode } from 'fs';
import mongoose, { Model } from 'mongoose';
import { PlaceSchema } from 'src/places/schemas/places.schema';
import { Race, RaceDocument, RaceSchema } from 'src/races/schemas/races.schema';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { Character, CharacterDocument } from './schemas/characters.schema';

@Injectable()
export class CharactersService {
  constructor(
    @InjectModel(Character.name)
    private characterModel: Model<CharacterDocument>,
    @InjectModel(Race.name) public raceModel: Model<Race>,
  ) {}
  async create(createCharacterDto: CreateCharacterDto) {
    return new this.characterModel(createCharacterDto).save();
  }

  findAll() {
    //const Location = mongoose.model('Place', PlaceSchema);
    return this.characterModel.find().populate('race').exec();
  }

  findOne(id: string) {
    return this.characterModel.findById(id).exec();
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
