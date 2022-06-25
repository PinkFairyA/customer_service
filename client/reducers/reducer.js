import { combineReducers } from 'redux';
import client from './clientReducer.js'

const reducers = combineReducers({
    client,
});

export default reducers;