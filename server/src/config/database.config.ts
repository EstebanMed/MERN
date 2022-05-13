import { connect, Mongoose } from 'mongoose';

export default ():Promise<Mongoose> => {
  const { DB_HOSTNAME, DB_PORT, DB_NAME } = process.env;
  return connect(`${DB_HOSTNAME}:${DB_PORT}/${DB_NAME}`);
};
