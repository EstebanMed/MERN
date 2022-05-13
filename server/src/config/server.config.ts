import express from 'express';
import RouterApi from '../api/index';

export default (app: express.Application) => {
  // Midlewares
  app.use(express.json());
  app.use(RouterApi());
};
