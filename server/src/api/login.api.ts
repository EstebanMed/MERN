import {Request, Response, Router} from 'express';
import PromiseRouter from 'express-promise-router';
import jwt from 'jsonwebtoken';
import validateUser from './validators/user.validator';
import bcrypt from 'bcrypt';
import fs from 'fs';
import UserService from '../services/user.service';

const route = PromiseRouter();
export default(app : Router) : void => {
    app.use('/v1', route);
    route.post('/getToken', validateUser, async (req : Request, res : Response) => {
        let token = null;
        const {password, username} = req.body;
        const userService = new UserService();
        const user = await userService.getById(username);
        if (user) {
            const areEqual = await bcrypt.compare(password, user.password);
            const privateKey = fs.readFileSync("C:/Dev/MERN/server/src/config/auth/auth.private-key")
            console.log('my', areEqual)
            if (areEqual) {
                token = jwt.sign({
                    data: req.body,
                }, privateKey, { algorithm: 'RS256', expiresIn: '1m' });
            }
        }
        console.log('holi token', token)
        res.send(token);
    })
}
