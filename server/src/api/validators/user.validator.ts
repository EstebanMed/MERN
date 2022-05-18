import { check } from 'express-validator';
import { Request, Response } from 'express';
import validateResult from '../helpers/validate.helper';

const validateUser = [
  check('username')
    .exists()
    .not()
    .isEmpty(),
  check('password')
    .exists()
    .not()
    .isEmpty(),
  (req: Request, res: Response, next: any) => {
    validateResult(req, res, next);
  },
];

export default validateUser;
