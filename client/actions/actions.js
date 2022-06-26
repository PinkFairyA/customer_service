import * as types from '../constants/actionTypes.js';

export const addTicket = data => ({
    type: types.ADD_TICKET,
    payload: data,
  });

export const deleteTicket = data => ({
    type: types.DELETE_TICKET,
    payload: data,
  });

export const updateTicket = data => ({
    type: types.UPDATE_TICKET,
    payload: data,
  });

  export const resolveTicket = data => ({
    type: types.RESOLVE_TICKET,
    payload: data,
  });

  export const escalateTicket = data => ({
    type: types.ESCALATE_TICKET,
    payload: data,
  });