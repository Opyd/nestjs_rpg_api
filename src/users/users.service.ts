import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto, UpdateUserDto } from './dto';
import { User, UserDocument } from './schemas/users.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return new this.userModel(createUserDto).save();
  }

  async findAll() {
    return this.userModel.find({}).exec();
  }

  /**
   *
   * @param id szukanego użytkwonika (unikalne)
   * @returns {User} obiekt znalezionego uzytkownika
   */

  async findOneById(id: string) {
    return this.userModel.findById(id).exec();
  }

  /**
   *
   * @param email Przyjmuje email jako id do wyszkiwania
   * @returns {User} Zwarca użytkownika
   */

  async findOneByEmail(email: string) {
    return this.userModel.findOne({ email: email }).exec();
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel
      .findByIdAndUpdate({ id }, { $set: updateUserDto }, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.userModel.findByIdAndDelete(id).exec();
  }
}
