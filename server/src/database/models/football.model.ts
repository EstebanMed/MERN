import { model } from 'mongoose';
import teamSchema from '../schemas/team.schema';

export default model('Football', teamSchema);
