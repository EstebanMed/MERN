import { Router, Request, Response } from 'express';
import PromiseRouter from 'express-promise-router';
import basketballModel from '../database/models/basketball.model';
// import FootballModel from '../database/models/football.model';

const route = PromiseRouter();
export default (app: Router):void => {
  app.use('/v1', route);
  route.get('/team', (_request, response) => response.status(200).json(['Barcelona', 'RealMadrid']));
  route.get('/team/:id', (_request, response) => response.send(['RealMadrid']));
  route.post('/team', async (req: Request, response: Response) => {
    // TODO: Check when body does not match with schema. It stores a default document
    await basketballModel.create(req.body);
    response.send(200);
  });
};
