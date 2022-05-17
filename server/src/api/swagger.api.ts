import { Router } from 'express';
import PromiseRouter from 'express-promise-router';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../config/swagger.config.json';

const route = PromiseRouter();
export default (app: Router):void => {
  app.use('/v1', route);
  route.use('/api-docs', swaggerUi.serve);
  route.get('/api-docs', swaggerUi.setup(swaggerDocument));
};
