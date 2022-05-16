import { validationResult } from 'express-validator';
import { Request, Response } from 'express';

const validateResult = (req: Request, res: Response, next: any) => {
  // TODO: Search about next instance type to avoid any
  try {
    validationResult(req).throw();
    return next();
  } catch (err: any) {
    // TODO: Search about err instance type to avoid any
    res.status(403);
    res.send({ errors: err.array() });
  }
};

export default validateResult;
