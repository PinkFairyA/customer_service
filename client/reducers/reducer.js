import { combineReducers } from 'redux';
import clientReducer from './clientReducer.js'

const reducers = combineReducers({
  client: clientReducer,
});

// export default reducers(state, action);
export default reducers;