import { model, Schema } from 'mongoose';

const getModel = (sport: string) => model(sport, new Schema({
  sport: String,
  name: String,
}));
export default getModel;
