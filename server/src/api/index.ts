import { Router } from 'express';
import Teams from './teams.api';
import Users from './users.api';
import Login from './login.api';
import Swagger from './swagger.api';

export default ():Router => {
  const router = Router();
  // Routing
  Swagger(router);
  Teams(router);
  Users(router);
  Login(router);
  return router;
};
