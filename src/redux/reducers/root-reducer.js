import { combineReducers } from 'redux';
import userReducer from './user.slice';
import zulesReducer from './zules/zules.slice';

export const rootReducer = combineReducers({
    user: userReducer,
    zules: zulesReducer
});

