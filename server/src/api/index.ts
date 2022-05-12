import { Router } from 'express';
import Teams from './teams.api';

export default ():Router => {
  const router = Router();
  Teams(router);
  return router;
};
