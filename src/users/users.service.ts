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

  findAll() {
    return `This action returns all users`;
  }

  findOneById(id: string) {
    return this.userModel.findById(id).exec();
  }

  /**
   *
   * @param email Przyjmuje email jako id do wyszkiwania
   * @returns {User} Zwarca użytkownika
   */

  findOne(email: string) {
    return this.userModel.findOne({ email: email }).exec();
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
