import { model } from 'mongoose';
import teamSchema from '../schemas/team.schema';

const getModel = (sport: string) => model(sport, teamSchema);
export default getModel;
