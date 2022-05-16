import { model } from 'mongoose';
import { SportTypes } from 'types/sports.type';
import teamSchema from '../schemas/team.schema';

const getModel = (sport: SportTypes) => model(sport, teamSchema);
export default getModel;
