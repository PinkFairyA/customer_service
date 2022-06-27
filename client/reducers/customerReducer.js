import * as types from '../constants/actionTypes.js';

const initialState = {
  userloggedIn: false,
  ticketRowElements: [],
  //[{ticket_id: 1, ticket_reason: 'Internet too slow', 
  //    ticket_status: 'Open', first_name: 'John', last_name: 'Smith', create_tmstmp: '2022-06-24 12:00:00'}],
}

// const initialState = {
//   firstName: 'Jimbo',
//   lastName: 'Whsdfsdfsite',
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
                ...state
            }
        }

        case types.ADD_TICKET_ROWS: {
            return {
                ...state,
                ticketRowElements: action.payload,
            }
        }

        case types.LOG_IN: {
            return {
                ...state,
                userloggedIn: !state.userloggedIn,
            }
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
            return state
        }
    }
}

export default customerReducer;