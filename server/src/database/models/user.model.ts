import {model, Schema, models} from 'mongoose';

const getModel = function (colectionName : string) {
    console.log('az', models.User);
    if (models[colectionName]) {
        return models[colectionName];
    }
    const r = model(colectionName, new Schema({username: String, password: String}));
    console.log('h', r);
    return r;
//TODO: REFACTOR OR IMPLEMENT SINGLETON PATTERN
}
export default getModel;
