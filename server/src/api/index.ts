import { Router } from 'express';
import Teams from './teams.api';
import Swagger from './swagger.api';

export default ():Router => {
  const router = Router();
  Swagger(router);
  Teams(router);
  return router;
};
