import { squadType } from '../types/squad.type';
import { TeamInterface } from '../interfaces/team.interface';

export default class FootballService implements TeamInterface {
  add(team: squadType): void {
    console.log(team);
  }

  // update(team: SportTypes): void {
  //   throw new Error('Method not implemented.');
  // }

  // delete(team: SportTypes): void {
  //   throw new Error('Method not implemented.');
  // }

  // getAll(team: SportTypes): void {
  //   throw new Error('Method not implemented.');
  // }

  // getById(team: SportTypes): void {
  //   throw new Error('Method not implemented.');
  // }
}
