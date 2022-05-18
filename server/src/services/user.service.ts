import { UserType } from 'types/user.type';
import UserRepository from '../repositories/user.repository';

export default class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  add(user: UserType): void {
    this.userRepository.create(user);
  }

  update(user: UserType): void {
    this.userRepository.update(user);
  }

  delete(username: string): void {
    this.userRepository.delete(username);
  }

  async getById(username: string): Promise<UserType|null> {
    const result = await this.userRepository.getById(username);
    return result;
  }
}
