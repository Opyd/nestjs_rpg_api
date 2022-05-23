import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRaceDto } from './dto/create-race.dto';
import { UpdateRaceDto } from './dto/update-race.dto';
import { Race, RaceDocument } from './schemas/races.schema';

@Injectable()
export class RacesService {
  constructor(@InjectModel(Race.name) private raceModel: Model<RaceDocument>) {}
  async create(createRaceDto: CreateRaceDto) {
    return new this.raceModel(createRaceDto).save();
  }

  findAll() {
    return this.raceModel.find({}).exec();
  }

  findOne(id: string) {
    return this.raceModel.findById(id).exec();
  }

  update(id: string, updateRaceDto: UpdateRaceDto) {
    return this.raceModel.findByIdAndUpdate(id, updateRaceDto, { new: true });
  }

  remove(id: string) {
    return this.raceModel.findByIdAndDelete(id).exec();
  }
}
