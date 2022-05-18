import { UserType } from 'types/user.type';
import { Model } from 'mongoose';
import { Repository } from './interfaces/repository.interface';
import userModel from '../database/models/user.model';

export default class UserRepository implements Repository<UserType> {
  private model:Model<any>;

  constructor() {
    this.model = userModel('User');
  }

  async create(user: UserType): Promise<void> {
    await this.model.create(user);
  }

  async update(user: UserType): Promise<void> {
    await this.model.updateOne({ username: user.username, password: user.password });
  }

  async delete(username: string): Promise<void> {
    await this.model.deleteOne({ username });
  }

  async getById(username: string): Promise<any> {
    const result:any = await this.model.findOne({ username }).exec();
    return result;
  }
}
