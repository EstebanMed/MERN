import { SquadType } from 'types/squad.type';
import { Repository } from './interfaces/repository.interface';
import teamModel from '../database/models/team.model';

export default class TeamRepository implements Repository<SquadType> {
  async create(team: SquadType): Promise<void> {
    const { sport } = team;
    const model = teamModel(sport);
    await model.create(team);
  }

  //   update(team: T): void {
  //     throw new Error('Method not implemented.');
  //   }

  //   delete(team: T): void {
  //     throw new Error('Method not implemented.');
  //   }

  //   getAll(team: T): void {
  //     throw new Error('Method not implemented.');
  //   }

//   getById(team: T): void {
//     throw new Error('Method not implemented.');
//   }
}
