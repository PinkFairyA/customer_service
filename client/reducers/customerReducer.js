import * as types from '../actions/actions.js';

const initialState = {
  firstName: 'Jimbo',
  lastName: 'Whsdfsdfsite',
  address: '6 Moultie St',
  city: 'Boston',
  st: 'MA',
  zip: '02124',
  phone: '(857) 212-1143',
  email: 'jim.white@me.com',
  id: '',
};

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
  console.log(
    '🔴🟠🟡🟢🔵🟣 | file: customerReducer.js | line 28 | customerReducer | state',
    state
  );
  return state;
  switch (action.type) {
    case types.addTicket: {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default customerReducer;