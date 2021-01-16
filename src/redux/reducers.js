import { combineReducers } from 'redux';
import settings from './settings/reducer';
import auth from './auth/reducer';
import product from './product/reducer'
const reducers = combineReducers({
    settings,
    auth,
    product,
});
export default reducers;