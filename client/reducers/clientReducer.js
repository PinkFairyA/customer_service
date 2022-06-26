import * as types from '../actions/actions.js'

const initialState = {
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  st: '',
  zip: '',
  phone: '',
  email: '',
  id: '',
}

const clientReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.addTicket: {
        return state;
        }
        default: {
        return state;
        }
    }
}

export default clientReducer;