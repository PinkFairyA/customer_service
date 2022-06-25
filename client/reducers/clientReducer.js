import * as types from '../action/actions.js'

const initialState = {

}

const clientReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TICKET: {

        }
        default: {
            return state
        }
    }
}

export default clientReducer;