import * as types from '../actions/actions.js';

const initialState = {
  content: 'Now is the time for all good men and women to come to the aid of their country.',
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

const customerNotesReducer = (state = initialState, action) => {
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

export default customerNotesReducer;