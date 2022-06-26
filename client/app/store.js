import {configureStore} from '@reduxjs/toolkit';
import reducers from '../reducers/reducer.js';

const store = configureStore({reducer:reducers});
// const store = createStore(reducers);

export default store;
