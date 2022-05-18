import { Router, Response, Request } from 'express';
import PromiseRouter from 'express-promise-router';
import { UserType } from 'types/user.type';
import UserService from '../services/user.service';
import validateUser from './validators/user.validator';

const route = PromiseRouter();
export default (app: Router):void => {
  app.use('/v1', route);
  route.post('/user', validateUser, async (req: Request, response: Response) => {
    const service = new UserService();
    service.add(req.body as UserType);

    response.send(200);
  });

  route.put('/user/:username', validateUser, async (req: Request, response: Response) => {
    const service = new UserService();
    const { username } = req.params;
    const { password } = req.body;
    service.update({ username, password } as UserType);

    response.send(200);
  });

  route.delete('/user/:username', async (req: Request, response: Response) => {
    const service = new UserService();
    const { username } = req.params;
    service.delete(username as string);

    response.send(200);
  });

  route.get('/user/:username', async (req: Request, response: Response) => {
    const service = new UserService();
    const { username } = req.params;
    const result = await service.getById(username as string);

    response.send(result);
  });
};
