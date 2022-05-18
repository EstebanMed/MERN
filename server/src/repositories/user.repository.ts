import { UserType } from 'types/user.type';
import { Model } from 'mongoose';
import { Repository } from './interfaces/repository.interface';
import userModel from '../database/models/user.model';

export default class UserRepository implements Repository<UserType> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

  async getById(username: string): Promise<UserType|null> {
    const result = await this.model.findOne<UserType>({ username }).exec();
    return result;
  }
}
