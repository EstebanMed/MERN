import express from 'express';
import serverConfig from './config/server';

const startServer = () => {
  const app = express();
  serverConfig(app);
  app.listen(process.env.PORT, () => { console.log(`running on port ${process.env.PORT}`); }).on('error', (err) => {
    console.error(err);
    process.exit(1);
  });
};

startServer();
