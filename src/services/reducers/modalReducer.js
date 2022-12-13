import { SAVED_BOOK_MODAL } from "../actions/actionTypes"

// Initialize state
const initializedSate = {
    savedBookModalStatus: false
}

const modalReducer = (state = initializedSate, action) => {

    const {type, payload} = action

    switch(type) {
        case SAVED_BOOK_MODAL:
            return {
                ...state,
                savedBookModalStatus: payload
            }
        default:
            return state
    }

}

export default modalReducer