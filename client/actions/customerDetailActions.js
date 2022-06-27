import * as types from '../constants/actionTypes.js';

export const chooseDate = data => ({
    type: types.CHOOSE_DATE,
    payload: data,
  });

