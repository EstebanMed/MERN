import { Router, Response, Request } from 'express';
import PromiseRouter from 'express-promise-router';
import { TeamInterface } from 'services/interfaces/team.interface';
import { SquadType } from 'types/squad.type';
import validateCreate from './validators/team.validator';
import SportsFactory from '../services/factory.service';

const route = PromiseRouter();
export default (app: Router):void => {
  app.use('/v1', route);
  route.post('/team', validateCreate, async (req: Request, response: Response) => {
    const squad = req.body as SquadType;
    const teamService: TeamInterface = SportsFactory.create(squad.sport);
    teamService.add(squad);

    response.send(200);
  });
};
