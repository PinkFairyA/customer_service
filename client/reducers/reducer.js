import { combineReducers } from 'redux';








// import customerReducer from './customerReducer.js';
import customer from './customerReducer.js';

// const reducers = combineReducers({
//   customerDetails: customerReducer,
// });

// // export default reducers(state, action);
// export default reducers;







// import client from './clientReducer.js';

export default combineReducers({
  customer
});
