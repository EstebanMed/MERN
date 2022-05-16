import { Router, Response } from 'express';// Request
import PromiseRouter from 'express-promise-router';
import { TeamInterface } from 'interfaces/team.interface';
import { squadType } from 'types/squad.type';
import FootballService from '../services/football.service';
import teamModel from '../database/models/team.model';
import validateCreate from './validators/team.validator';

const route = PromiseRouter();
export default (app: Router):void => {
  app.use('/v1', route);
  route.post('/team', validateCreate, async (req: any, response: Response) => {
    const { sport } = req.body;
    const model = teamModel(sport);
    const squad = req.body as squadType;
    const team: TeamInterface = new FootballService();
    team.add(squad);
    await model.create(squad);
    response.send(200);
  });
};
