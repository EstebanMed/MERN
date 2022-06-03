import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import fs from 'fs';

export default (req:Request, res:Response, next: NextFunction) => {
    const array = req.headers.authorization?.split(" ");
    console.log('array', array)
    if(Array.isArray(array))
    {
        console.log('from auth middleware');
        const [, token]:string[] = array;
        console.log(token);
        const publicKey = fs.readFileSync("C:/Dev/MERN/server/src/config/auth/auth.public-key")//TODO: Set relative path
        const payLoad = jwt.verify(token, publicKey, { algorithms: ['RS256'] });
        console.log(payLoad);
        //TODO: Add try catch
    }
    next();
}