import { Router, Request, Response } from 'express';
import PromiseRouter from 'express-promise-router';
import teamModel from '../database/models/team.model';
import validateCreate from './validators/team.validator';

const route = PromiseRouter();
export default (app: Router):void => {
  app.use('/v1', route);
  route.post('/team', validateCreate, async (req: Request, response: Response) => {
    console.log('controller hett');
    const { sport } = req.body;
    const model = teamModel(sport);
    await model.create(req.body);
    response.send(200);
  });
};
