import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore } from '@reduxjs/toolkit';
import reducer from '../reducers/reducer.js';

// const store = configureStore({reducer:reducers});
const store = configureStore({reducer},
  composeWithDevTools());

export default store;
