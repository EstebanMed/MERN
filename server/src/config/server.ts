import express from 'express';
import dotenv from 'dotenv';
import RouterApi from '../api/index';

export default (app: express.Application) => {
  dotenv.config();
  app.use(RouterApi());
};
