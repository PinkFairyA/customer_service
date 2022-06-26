import {configureStore} from '@reduxjs/toolkit';
import reducers from '../reducers/reducer.js';

const store = configureStore({reducer:reducers});

export default store;
