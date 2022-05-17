import TeamRepository from '../repositories/team.repository';
import { SquadType } from '../types/squad.type';
import { TeamInterface } from './interfaces/team.interface';

export default class FootballService implements TeamInterface {
  private teamRepository: TeamRepository;

  constructor() {
    this.teamRepository = new TeamRepository();
  }

  add(team: SquadType): void {
    this.teamRepository.create(team);
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
