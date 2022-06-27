import * as types from '../constants/actionTypes.js';

export const addTicketRows = data => ({
  type: types.ADD_TICKET_ROWS,
  payload: data
});

// export const addTicket = data => ({
//     type: types.ADD_TICKET,
//     payload: data,
//   });

// export const deleteTicket = data => ({
//     type: types.DELETE_TICKET,
//     payload: data,
//   });

// export const updateTicket = data => ({
//     type: types.UPDATE_TICKET,
//     payload: data,
//   });

// export const resolveTicket = data => ({
//     type: types.RESOLVE_TICKET,
//     payload: data,
//   });

// export const addClient = data => ({
//     type: types.ADD_CLIENT,
// export const escalateTicket = data => ({
//     type: types.ESCALATE_TICKET,
//     payload: data,
//   });

// export const addClient = data => ({
//     type: types.ADD_CLIENT,
//     payload: data,
//   });

// export const addCustomer = data => ({
//     type: types.ADD_CUSTOMER,
//     payload: data,
//   });

// export const addCustomerPhone = data => ({
//     type: types.ADD_CUSTOMER_PHONE,
//     payload: data,
//   });