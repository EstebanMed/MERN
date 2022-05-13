import express from 'express';
import dotenv from 'dotenv';
import connectToDB from './config/database.config';
import serverConfig from './config/server.config';

const startServer = () => {
  connectToDB().then(() => {
    const app = express();
    serverConfig(app);
    app.listen(process.env.PORT, () => {
      console.log(`running on port ${
        process.env.PORT
      }`);
    }).on('error', (err) => {
      console.error(err);
      process.exit(1);
    });
  }).catch((err) => console.error(err));
};

dotenv.config();
startServer();
