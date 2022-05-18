import { model, Schema } from 'mongoose';

const getModel = (colectionName: string) => model(colectionName, new Schema({
  username: String,
  password: String,
}));
export default getModel;
