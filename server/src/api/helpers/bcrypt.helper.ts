/* eslint-disable @typescript-eslint/no-explicit-any */
import bcrypt from "bcrypt";

const saltRounds = 10;

export const encriptPasswordWay1 = (value : string) => new Promise((resolve) => bcrypt.genSalt(saltRounds, function (err : any, salt : any) {
    bcrypt.hash(value, salt, function (err : any, hash : any) {
        resolve(hash);
    });
}));

export const encript = (value : string) => new Promise((resolve) => {
    bcrypt.hash(value, saltRounds, function (err : any, hash : any) {
        resolve(hash);
    })
});
