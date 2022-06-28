import * as types from '../constants/actionTypes.js';

const initialState = {
  userloggedIn: false,
  ticketRowElements: [],
  customerDetail: {
    user_id: '',
    first_name: 'Jimbo',
    last_name: 'White',
    street_address: '6 Moultie Street',
    city: 'Boston',
    state: 'MA',
    zip_code: '02124-2216',
    phone: '(857) 212-1143',
    email: 'jim.white@me.com',
    service_type: 'Ultimate Premium Moon Rock',
  },
// const initialState = {
//   userloggedIn: false,
//   ticketRowElements: [],
//   customerDetail: {
//     user_id: '',
//     first_name: '',
//     last_name: '',
//     street_address: '',
//     city: '',
//     state: '',
//     zip_code: '',
//     phone: '',
//     email: '',
//     service_type: '',
//   },
  //[{ticket_id: 1, ticket_reason: 'Internet too slow',
  //    ticket_status: 'Open', first_name: 'John', last_name: 'Smith', create_tmstmp: '2022-06-24 12:00:00'}],
};

// const initialState = {
//   firstName: 'Jimbo',
//   lastName: 'White',
//   address: '6 Moultie St',
//   city: 'Boston',
//   st: 'MA',
//   zip: '02124',
//   phone: '(857) 212-1143',
//   email: 'jim.white@me.com',
//   id: '',
// };

// const initialState = {
//   firstName: '',
//   lastName: '',
//   address: '',
//   city: '',
//   st: '',
//   zip: '',
//   phone: '',
//   email: '',
//   id: '',
// }

const customerReducer = (state = initialState, action) => {
  // const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TICKET: {
      return {
        ...state,
      };
    }

    case types.ADD_TICKET_ROWS: {
      return {
        ...state,
        ticketRowElements: action.payload,
      };
    }

    case types.LOG_IN: {
      return {
        ...state,
        userloggedIn: !state.userloggedIn,
      };
    }

    case types.LOAD_TICKET: {
      return {
        ...state,
        customerDetail: action.payload[1].user_data,
      };
    }
    // case types.DELETE_TICKET: {

    // }
    // case types.ESCALATE_TICKET: {

    // }
    // case types.RESOLVE_TICKET: {

    // }
    // case types.ADD_CLIENT: {

    // }
    // case types.ADD_CUSTOMER: {

    // }
    // case types.ADD_CUSTOMER_PHONE: {

    // }
    default: {
      return state;
    }
  }
};

export default customerReducer;