import { TeamInterface } from '../services/interfaces/team.interface';
import sportsConstant from '../constants/sports.constant';

class SportsFactory {
  static create(sport: string):TeamInterface {
    return sportsConstant[sport];
  }
}

export default SportsFactory;
