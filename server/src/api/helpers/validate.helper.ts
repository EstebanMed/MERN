import { validationResult } from 'express-validator';
import { Response } from 'express';

const validateResult = (req: any, res: Response, next: any) => {
  // TODO: Search about next instance type to avoid any
  try {
    req.class = 'holi';
    console.log(req);
    validationResult(req).throw();
    return next();
  } catch (err: any) {
    // TODO: Search about err instance type to avoid any
    res.status(403);
    res.send({ errors: err.array() });
  }
};

export default validateResult;
