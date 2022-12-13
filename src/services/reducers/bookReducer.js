import { FETCH_BOOKS, SAVE_BOOK } from "../actions/actionTypes"

const initializedState = {
    data: null
}

const bookReducer = (state = initializedState, action) => {

    const {type, payload} = action

    switch(type) {
        case FETCH_BOOKS:
            return {
                ...state,
                data: payload
            }
        case SAVE_BOOK:
            return {
                
            }
        default:
            return state
    }
}

export default bookReducer