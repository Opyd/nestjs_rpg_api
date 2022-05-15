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
    return `This action returns all races`;
  }

  findOne(id: number) {
    return `This action returns a #${id} race`;
  }

  update(id: number, updateRaceDto: UpdateRaceDto) {
    return `This action updates a #${id} race`;
  }

  remove(id: number) {
    return `This action removes a #${id} race`;
  }
}
