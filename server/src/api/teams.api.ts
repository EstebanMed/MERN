import { Router } from 'express';
import PromiseRouter from 'express-promise-router';

const route = PromiseRouter();
export default (app: Router):void => {
  app.use('/v1', route);
  route.get('/team', (_request, response) => response.status(200).json(['Barcelona', 'RealMadrid']));
  route.get('/team/:id', (request, response) => response.send(['RealMadrid']));
};
