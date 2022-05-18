import { check } from 'express-validator';
import { NextFunction, Request, Response } from 'express';
import sportNames from '../../constants/sports.constant';
import validateResult from '../helpers/validate.helper';

const validateCreate = [
  check('name')
    .exists()
    .not()
    .isEmpty(),
  check('sport')
    .exists()
    .custom((value: string) => Object.prototype.hasOwnProperty.call(sportNames, value)),
  (req: Request, res: Response, next: NextFunction) => {
    validateResult(req, res, next);
  },
];

export default validateCreate;
