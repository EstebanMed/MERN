import { TeamInterface } from 'services/interfaces/team.interface';
import FootballService from '../services/football.service';

const sportInstances: Record<string, TeamInterface> = {
  football: new FootballService(),
};

export default sportInstances;
