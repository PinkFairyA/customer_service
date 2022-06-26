import * as types from '../constants/actionTypes.js'

const initialState = {
    ticketRowElements: [],
}

const clientReducer = (state = initialState, action) => {
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

export default clientReducer;